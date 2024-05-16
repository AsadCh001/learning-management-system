// import { Skeleton } from "@/components/ui/skeleton"

// export default function Loading() {
//     return (
//         <main className="p-10 grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5">
//             {Array.from({length: 12},(_, i) => i + 1).map((id) => (
//                 <div key={id} className="grid-flow-col auto-cols-max gap-12">
//                     <Skeleton className="object-none w-32 h-32 rounded-full custom-position bg-gray-200" />
//                     <Skeleton className="h-8 w-full p-4 mb-4 bg-slate-100" />
//                     <Skeleton className="h-8 w-full p-4 mb-4 bg-slate-100" />
//                     <Skeleton className='h-8 w-full p-4 mb-4 bg-slate-100' />
//                 </div>
//                 )
//             )}
//         </main>
//     )
// }

import React from 'react';

const Loading = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: 9 }, (_, i) => (
        <div key={i} className="animate-pulse">
          <div className="w-30 h-48 bg-gray-300 rounded-lg mb-2"></div>
          <div className="h-4 bg-gray-300 rounded mb-2 w-3/4"></div>
          <div className="h-3 bg-gray-300 rounded w-1/2"></div>
        </div>
      ))}
    </div>
  );
};


export default Loading;