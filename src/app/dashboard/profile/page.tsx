import { Heading } from "@/components/ui";
import { ProfileForm } from "@/components/modules";

export default function ProfilePage() {
  return (
    <div>
      <Heading className="mb-4">Profile</Heading>
      <ProfileForm />
    </div>
  );
}
