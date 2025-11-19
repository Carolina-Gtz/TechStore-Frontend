import { CustomHeader } from "@/shared/components/CustomHeader";
import { CustomBanner } from "@/store/components/CustomBanner"
import { CustomJumbotron } from "@/store/components/CustomJumbotron"

export const HomePages = () => {

    // const [showLogin, setShowLogin] = useState(false);
    return (
        <>
            <CustomHeader />
            <CustomJumbotron description="Todo lo que necesitas" />
            <CustomBanner />
        </>
    )
}
