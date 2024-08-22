import { Heading } from "@/ui";
import { ProfileForm } from "@/modules";

export default function ProfilePage() {
  return (
    <div>
      <Heading className="mb-4">Profile</Heading>
      <ProfileForm />
    </div>
  );
}
