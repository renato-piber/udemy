import { Routes, Route } from "react-router-dom" /* react router voltado para a dom */

import Home from "../components/home/Home"
import UserCrud from "../components/user/UserCrud"

export default props =>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserCrud />} />
        <Route path="*" element={<Home />} /> {/* "redirect" */}
    </Routes>