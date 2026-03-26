import Map "mo:core/Map";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Nat "mo:core/Nat";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";
import Int "mo:core/Int";

actor {
  type ContactSubmission = {
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    timestamp : Time.Time;
  };

  let contactSubmissions = Map.empty<Principal, ContactSubmission>();
  var admin : ?Principal = null;

  module ContactSubmission {
    public func compare(submission1 : ContactSubmission, submission2 : ContactSubmission) : Order.Order {
      Int.compare(submission2.timestamp, submission1.timestamp);
    };
  };

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, phone : Text, message : Text) : async () {
    if (name.size() == 0 or email.size() == 0 or message.size() == 0) {
      Runtime.trap("Name, email, and message fields cannot be empty!");
    };

    let submission : ContactSubmission = {
      name;
      email;
      phone;
      message;
      timestamp = Time.now();
    };

    contactSubmissions.add(caller, submission);
  };

  public shared ({ caller }) func becomeAdmin() : async () {
    switch (admin) {
      case (null) { admin := ?caller };
      case (?currentAdmin) {
        if (caller.notEqual(currentAdmin)) {
          Runtime.trap("Admin already set");
        };
      };
    };
  };

  public query ({ caller }) func getAllContactSubmissions() : async [ContactSubmission] {
    switch (admin) {
      case (null) { Runtime.trap("No admin set") };
      case (?currentAdmin) {
        if (caller == currentAdmin) {
          contactSubmissions.values().toArray().sort();
        } else {
          Runtime.trap("Unauthorized access");
        };
      };
    };
  };

  public query ({ caller }) func isAdmin() : async Bool {
    switch (admin) {
      case (null) { false };
      case (?currentAdmin) { caller == currentAdmin };
    };
  };

  public func getAdmin() : async ?Principal {
    admin;
  };
};
