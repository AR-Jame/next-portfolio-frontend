import { Button } from "@/components/ui/button";
import Link from "next/link";

const DashboardPage = () => {
    return (
        <div className="mt-24">
            <Link href={"/dashboard/create-blog"}>
                <Button variant={"outline"}>
                    Create Blog
                </Button>
            </Link>
        </div>
    );
};

export default DashboardPage;