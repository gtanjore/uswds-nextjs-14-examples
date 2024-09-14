import './page.css';
import type { Metadata } from "next";
import Search2 from './Search2';
import Results2 from './Results2';

export const metadata: Metadata = {
  title: "Search 2",
};

export default function Search2Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>    
    <div className='layout'>
      <div className='leftPanel'>
      <Search2 />
      </div>
      <div className='rightPanel'>
      <Results2 />
      </div>
    </div>
  </>
  );
}
