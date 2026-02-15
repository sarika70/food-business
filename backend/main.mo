import Text "mo:core/Text";
import List "mo:core/List";

actor {
  let submissions = List.empty<(Text, Text, Text)>();

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text) : async () {
    submissions.add((name, email, message));
  };

  public query ({ caller }) func getAllSubmissions() : async [(Text, Text, Text)] {
    submissions.toArray();
  };
};
