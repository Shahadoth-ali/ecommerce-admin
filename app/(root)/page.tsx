"use client";

import { Modal } from "@/components/ui/modal";




const SetupPage=()=> {
  return (
   <div className='p-4'>
<Modal title="test" description="test description" isOpen={true} onClose={()=>{}}>
  Children
</Modal>
   </div>
  );
}

export default SetupPage;