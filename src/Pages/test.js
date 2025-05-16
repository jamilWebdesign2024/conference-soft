// const getEmbedUrl = (url) => {
//   if (!url) return null;

//   try {
//     const parsedUrl = new URL(url);

//     // If it's a youtu.be short link
//     if (parsedUrl.hostname === "youtu.be") {
//       return `https://www.youtube.com/embed/${parsedUrl.pathname.slice(1)}`;
//     }

//     // If it's already an embed link
//     if (parsedUrl.pathname.startsWith("/embed/")) {
//       return url;
//     }

//     // If it's a standard YouTube watch link
//     if (parsedUrl.hostname.includes("youtube.com") && parsedUrl.searchParams.get("v")) {
//       const videoId = parsedUrl.searchParams.get("v");
//       return `https://www.youtube.com/embed/${videoId}`;
//     }

//     return null;
//   } catch (error) {
//     console.error("Invalid YouTube URL:", url);
//     return null;
//   }
// };
