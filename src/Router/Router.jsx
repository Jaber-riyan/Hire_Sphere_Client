import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import HomeLayout from "../Pages/Home/HomeLayout";
import JobDetail from "../Pages/JobDetail/JobDetail";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import JobApply from "../Pages/JobApply/JobApply";
import AppliedJobs from "../Pages/AppliedJobs/AppliedJobs";
import AddJobs from "../Pages/AddJobs/AddJobs";
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";
import ViewApplications from "../Pages/ViewApplications/ViewApplications";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        errorElement: <h4>Page Not Found</h4>,
        children: [
            {
                path: '/',
                element: <HomeLayout></HomeLayout>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'login',
                element: <Login></Login>,
            },
            {
                path: 'job-detail/:id',
                element: <PrivateRoutes><JobDetail></JobDetail></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://hire-sphere-server.vercel.app/job/${params.id}`)
            },
            {
                path: 'job-apply/:id',
                element: <PrivateRoutes><JobApply></JobApply></PrivateRoutes>
            },
            {
                path: 'applied-jobs-list',
                element: <PrivateRoutes><AppliedJobs></AppliedJobs></PrivateRoutes>
            },
            {
                path: 'add-job',
                element: <PrivateRoutes><AddJobs></AddJobs></PrivateRoutes>
            },
            {
                path: 'posted-jobs',
                element: <PrivateRoutes><MyPostedJobs></MyPostedJobs></PrivateRoutes>
            },
            {
                path: 'view-applications/:id',
                element: <PrivateRoutes><ViewApplications></ViewApplications></PrivateRoutes>,
                loader: ({params})=> fetch(`https://hire-sphere-server.vercel.app/job-application-count?id=${params.id}`)
            }
        ]
    }
])

export default router;