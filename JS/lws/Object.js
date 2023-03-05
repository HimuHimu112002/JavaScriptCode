// const a = {
//     title: "Learn with Sumit",
//     social: {
//         facebook: "Facebook",
//         youtube: {
//             link: "https://youtube.com/learnwithsumit",
//             info: {
//                 title: "Learn with Sumit - LWS Bangladesh",
//                 description: "Learn programming like never before",
//                 meta: {
//                     subscribers: "73.1k",
//                     views: "600K",
//                 },
//             },
//             playlists: [
//                 "React Playlist",
//                 "Node Playlist",
//                 "Beginner JS Playlist",
//                 "Modern JS Playlist",
//             ],
//         },
//     },
// };

// const b = {
//     ...a,
//     social: {
//         ...a.social,       
//         youtube: {
//             ...a.social.youtube,
//             info: {
//                 ...a.social.youtube.info,
//                 ...a.social.youtube.info.meta.subscribers="80k",
//                 meta: {
//                     ...a.social.youtube.info.meta,
//                 },
//             },
//         },
//     },
// }

// console.log(b.social.youtube.info)
// console.log(a.social.youtube.info)

const initial = {
    value: 10,
    propertis:{
        a:10,
        b:20
    },
}

const update ={
    ...initial,
    Change:{
        ...initial.propertis,
        c:initial.propertis.b + 10,
    },
}
// akhane main object er kno change hobena 

console.log("Updated Value = ",update.Change.c)
console.log("Main Object Value = ",initial.propertis)
