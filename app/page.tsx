import NavbarButton from "@/components/global/NavbarButton";
import Wrapper from "@/components/global/Wrapper";
import React from "react";

export default function page(): React.ReactElement {
    return (
        <Wrapper title="Halaman Home">
            <div className="flex justify-center flex-col items-center">
                <p className="text-center">Ini adalah halaman Home, mohon login dahulu!</p>
                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eum a minus reprehenderit earum voluptate explicabo expedita harum sint maxime delectus, eveniet pariatur quae omnis voluptatem iure dolorum nulla officiis.</p>
                <div className="mt-4 font-bold btn btn-primary"> 
                    <NavbarButton />
                </div>
            </div>
        </Wrapper>
    );
}
