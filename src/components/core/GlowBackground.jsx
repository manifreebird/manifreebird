// export default function GlowBackground() {
//   return (
//     <div className="absolute inset-0 -z-10 overflow-hidden">
//       {/* Purple Glow */}
//       <div className="absolute w-[500px] h-[500px] bg-purple-500/30 blur-[120px] rounded-full top-[-100px] left-[-100px]" />

//       {/* Blue Glow */}
//       <div className="absolute w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />
//     </div>
//   );
// }


export default function GlowBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute w-[500px] h-[500px] bg-purple-500/30 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />
    </div>
  );
}