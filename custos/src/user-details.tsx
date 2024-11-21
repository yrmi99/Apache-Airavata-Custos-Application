import React, { useState, useEffect } from "react";
import { LogOut, UserIcon } from "lucide-react";
import { grpc } from "@improbable-eng/grpc-web";
import { UserService, GroupService } from "./protos/generated_services_pb"; // Generated gRPC files
import { UserProfile, Group } from "./protos/generated_pb"; // Generated Protobuf files

interface User {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  creationDate: string;
  role: string;
}

interface UserDetailProps {
  onLogout: () => void;
}

export default function UserDetails({ onLogout }: UserDetailProps) {
  const [user, setUser] = useState<User | null>(null);
  const [groups, setGroups] = useState<Group[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch user data via gRPC
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const request = new UserProfile();
        request.setUserId("123"); // Example user ID

        grpc.invoke(UserService.FetchUser, {
          request,
          host: "http://localhost:5000", // Update with your backend URL
          onMessage: (response: UserProfile) => {
            setUser({
              userId: response.getUserId(),
              firstName: response.getFirstName(),
              lastName: response.getLastName(),
              email: response.getEmail(),
              creationDate: response.getCreationDate(),
              role: response.getRole(),
            });
          },
          onEnd: () => setLoading(false),
        });
      } catch (error) {
        console.error("Failed to fetch user:", error);
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  // Fetch group data via gRPC
  useEffect(() => {
    const fetchGroups = async () => {
      try {
        grpc.invoke(GroupService.ListGroups, {
          request: new Group(),
          host: "http://localhost:5000",
          onMessage: (response) => {
            setGroups(response.getGroupsList());
          },
          onEnd: () => setLoading(false),
        });
      } catch (error) {
        console.error("Failed to fetch groups:", error);
        setLoading(false);
      }
    };

    fetchGroups();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>No user found!</div>;
  }

  const styles = {
    // Styles are the same as your original code
  };

  return (
    <div style={styles.body}>
      <div style={styles.div}>
        <h2 style={styles.title}>MyApp</h2>
        <span style={styles.welcome}>Welcome, {user.firstName} {user.lastName}</span>

        <div style={styles.userContainer}>
          <div style={styles.iconColumn}>
            <UserIcon size={170} color="#6d53ac" strokeWidth={1.5} />
          </div>
          <div style={styles.infoColumn}>
            <div style={styles.userInfoText}>
              <div style={{ fontWeight: "bold", textDecoration: "underline" }}>User Info</div>
              <div>Date of Account Creation: {user.creationDate}</div>
              <div>
                Email: {user.email}
                <br />
                Role: {user.role}
              </div>
            </div>
            <button
              onClick={onLogout}
              style={styles.logoutButton}
            >
              <LogOut style={{ marginRight: "8px" }} color="#6D53AC" size={20} strokeWidth={3} />
              <span>Logout</span>
            </button>
          </div>
        </div>

        <div style={styles.content}>
          <h3>Groups:</h3>
          <ul>
            {groups.map((group) => (
              <li key={group.groupId}>{group.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}