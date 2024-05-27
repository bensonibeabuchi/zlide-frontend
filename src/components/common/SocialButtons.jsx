'use client'
import { ImGoogle } from "react-icons/im"
import { continueWithGoogle } from "@/utils"

export default function SocialButtons(){
    return (
        <div className="flex justify-between items-center gap-2 mt-5">
            <button onClick={continueWithGoogle} className="flex items-center text-white space-x-2 rounded-md px-4 mt-3 py-4 font-medium bg-red-500">
                Sign in with Google <span className="flex justify-start items-center mx-2"> <ImGoogle/></span>

            </button>

        </div>
    )
}