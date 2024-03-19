import Navbar from '@/components/Navbar'
import Upload from '@/components/upload';
import Table from '@/components/Table'
import {Divider} from "@nextui-org/react";
import {NextUIProvider} from "@nextui-org/react";
export default function Home() {
  return (
    
    <main className="dark text-foreground bg-background" >
      <Navbar />
      <Divider className="my-4" />
    
      <Upload />
      
      <Divider className="my-4" />
      <Table />
    </main>
  );
}
