import Login from "../pages/Login";
import Index from "../pages/admin/dashboard/index"
import List from "../pages/admin/products/List"
import Edit from "../pages/admin/products/Edit"
import PageNotFound from "../pages/PageNotFound";
import FormTest from "../pages/admin/test/Formtest";

export const mainRoutes = [{
    path: "/login",
    component: Login
},{
    path: "/404",
    component: PageNotFound
}];

export const adminRoutes = [{
    path: "/admin/dashboard",
    component: Index,
    title: "看板",
    icon: "area-chart",
    isShow: true
},{
    path: "/admin/products",
    component: List,
    exact: true,
    title: "商品列表",
    icon: "shop",
    isShow: true
},{
    path: "/admin/test/Formtest",
    component: FormTest,
    exact: true,
    title: "Form 测试",
    icon: "shop",
    isShow: true
},{
    path: "/admin/products/edit/:id?",// id 可选参数
    component: Edit,
    isShow: false
}]