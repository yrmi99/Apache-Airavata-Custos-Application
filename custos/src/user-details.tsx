import React from 'react'
import { LogOutIcon, UserIcon } from 'lucide-react'

interface User {
  email: string;
  name: string;
}

interface UserDetailProps {
  user: User;
  onLogout: () => void;
}

export default function UserDetails({user, onLogout}: UserDetailProps) {

    ///////// add css styles here //////////
    const styles = {
        body: {

        }
    }

    ////////////////////////////////////////

    return (
        <div style={styles.body}>
            
        </div>
    )
}