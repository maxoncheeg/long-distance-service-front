import vk from "../../../assets/images/oauth/vk.svg";
import ok from "../../../assets/images/oauth/ok.svg";

interface IProviderImageProps {
    providerName: string;
}

export function ProviderImage({ providerName }: IProviderImageProps) {
    const getProviderName = (name: string) => {
        switch (name) {
            case "vk":
                return "ВКонтакте";
            case "ok":
                return "Одноклассники";
        }
    };

    const getProviderImage = (name: string) => {
        switch (name) {
            case "vk":
                return vk;
            case "ok":
                return ok;
        }
    };

    return (
        <img
            src={getProviderImage(providerName)}
            alt={getProviderName(providerName)}
            className="h-[35px] m-[5px]"
        />
    );
}
