import { Dashboard, PostAdd } from "@styled-icons/material";

export default [
    {
        id: "dashboardLink",
        displayName: "Dashboard",
        translation: "sidemenu.dashboard",
        iconComponent: Dashboard,
        className: "active",
        type: "link",
        url: "#/blog/admin/home",
        routes: ["/blog/admin/home"]
    },
    {
        id: "addPostLink",
        displayName: "Add New Post",
        translation: "sidemenu.phoneBook",
        iconComponent: PostAdd,
        type: "link",
        url: "#/blog/admin/post/list",
        routes: ["/blog/admin/post/list", "/blog/admin/post/add"]
    }
];
