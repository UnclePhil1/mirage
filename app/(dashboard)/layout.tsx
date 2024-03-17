import Navbar from "./_component/navbar";
import OrgSidebar from "./_component/org-sidebar";
import Sidebar from "./_component/sidebar"
// import { EmojiProvider } from "../board/_components/EmojiContext";

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    return (
            <div className="">
                <main className="h-screen">
                    <Sidebar />
                    <div className="pl-[60px] h-full">
                        <div className="flex h-screen">
                            <OrgSidebar />
                            <div className="h-auto flex-1 overflow-y-auto">
                                <Navbar />
                                {children}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
    )
}

export default DashboardLayout;