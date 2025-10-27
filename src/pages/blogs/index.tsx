import { Route, Router } from "kiru/router"
import { BuildingCiCd } from "./items/building-ci-cd"

export function Blogs() {
	return (
		<Router basePath="/" >
			<Route path="/building-ci-cd" element={<BuildingCiCd />} />
		</Router>
	)
}




