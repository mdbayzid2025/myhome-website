import ChangePasswordForm from "@/components/UserDashboard/PasswordAndSecurity/ChangePasswordForm";
import DeleteAccountSection from "@/components/UserDashboard/PasswordAndSecurity/DeleteAccountSection";

export default function ChangePasswordPage() {
    return (
        <div className="">
            <div className=" space-y-7 max-w-3xl">
                <ChangePasswordForm />
                <hr className="border-gray-100" />
                <DeleteAccountSection />
            </div>
        </div>
    );
}