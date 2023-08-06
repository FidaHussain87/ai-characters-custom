import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "@/components/sidebar";
const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className=" md:hidden pr-4" />
      </SheetTrigger>
      <SheetContent side="left" className="p-0 bg-secondary pt-10 w-32">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
