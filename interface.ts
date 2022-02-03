interface General {
    mission_name:string ;
    launch_date_local: string;
    launch_site: ILaunchSite;

}

interface ILaunchSite {
    site_name_long: string;
}
interface ILinks {
    article_link: null,
    video_link: string;
}
 interface IRocket{
     rocket_name: string,
     first_stage:ICores;
 }

interface ICores {
    flight: number,
    core: {
        reuse_count: 6,
        status: string,
    }
}
interface IsecondStage{
    "payloads": [
        {
            "payload_type": "Satellite",
            "payload_mass_kg": 15400,
            "payload_mass_lbs": 33951.2
        }
    ]
}