import { GET_PROJECTS, updateProjects, updateMessage } from '../actions/index';
import { getProjects } from '../../comms/commsService'
import store from '../index';

const projects =  [
    {
        title: "Stimp's Rage",
        releaseInfo: "Realase: In Development",
        gameImages: [{image : "../../../game_img/Stimps_Rage/pic_1.png"}, {image : "../../../game_img/Stimps_Rage/pic_2.png"}, {image : "../../../game_img/Stimps_Rage/pic_3.png"}],
        gameInfo: "Stimp's Rage is a 2D top down action adventure game with role playing elements, set in America during the 80's. A mass shooting has taken place and Stimp's family were killed by the masked gun men. This is the story of how Stimp, an officer of the Stonerville police department, goes undercover as a gang member to try to exact revenge on those that killed his wife and kids however he later finds out that the people he had worked alongside with who were his friends and team mates, are the ones who carried out that brutal shooting that killed his family. He becomes aware of how corrupt the police force are and in turn, slowly starts to corrupt him self and work for the gang which he thought was to blame.", 
        downloadLink:""
    },
    {
        title: "Deriko Delta",
        releaseInfo: "Realase: 18th of Jun 2020",
        gameImages: [{image : "../../../game_img/Deriko_Delta/pic_1.png"}, {image : "../../../game_img/Deriko_Delta/pic_2.png"}, {image : "../../../game_img/Deriko_Delta/pic_3.png"}],
        gameInfo: "Deriko Delta is a 2D top down survivor strategy game with the main aim of protecting your core from being destroyed by the waves of enemies. If you manage to get upto the 20th wave and neutralize the enemies without your core being destroyed, then you would have successfully completed the game.", 
        downloadLink:"https://paultheindiedev.itch.io/deriko-delta"
    },
    {
        title: "Apparition",
        releaseInfo: "Realase: 16th of May 2020",
        gameImages: [{image : "../../../game_img/Apparition/pic_1.png"}, {image : "../../../game_img/Apparition/pic_2.png"}, {image : "../../../game_img/Apparition/pic_3.png"}, {image : "../../../game_img/Apparition/pic_4.png"}, {image : "../../../game_img/Apparition/pic_5.png"}, {image : "../../../game_img/Apparition/pic_6.png"}, {image : "../../../game_img/Apparition/pic_7.png"}],
        gameInfo: "Apparition is a 2D puzzle platformer that had its intial conception and development, during The Global Game Jam which is held every year between 29th - 31st of January. This was first game I worked on as a programmer using the Unity Engine and ignited a passion for game development. I worked on this game with a group of 8 other indivduals, illustrators, animators, sound engineers, project managers, level designers and other programmers. \nGhosts always have unfinished business. For Hector, he feels he needs to make things right with his family before he can move on, having hurt each of them in small ways before his untimely and unexpected passing. You play as Hector’s apparition, working to reconcile with each member of your family in the hopes of moving on to the afterlife. But be careful! If your family sees you possessing and moving objects, they will become fearful and call a priest to exorcise you!", 
        downloadLink:"https://unfinished.itch.io/apparition"
    },
    {
        title: "Light The Way",
        releaseInfo: "Realase: 10th of May 2020",
        gameImages: [{image :"../../../game_img/Light_The_Way/pic_4.png"}, {image : "../../../game_img/Light_The_Way/pic_1.png"}, {image : "../../../game_img/Light_The_Way/pic_2.png"}, {image : "../../../game_img/Light_The_Way/pic_3.png"}],
        gameInfo: "Light The Way is a 2D puzzle platform with the main goal of the game being to get the player to the pace of refuge. The player is able to reach the refuge by traversing the platforms however the play is only able to see a small radius of what is around them. The player has to throw lights into the in order to light the path before them so they dont make a mistake and fall to their doom. The player also has to be on the lookout for the enemies that lurk in the shadow that move ever so close to you with each second.", 
        downloadLink:"https://paultheindiedev.itch.io/light-the-way"
    },
    {
        title: "Tribeka",
        releaseInfo: "Realase: 2nd of June 2020",
        gameImages: [{image :"../../../game_img/Tribeka/pic_1.png"}, {image : "../../../game_img/Tribeka/pic_2.png"}],
        gameInfo: "Tribeka is a 2D puzzle game, with the main goal of the game being to get from the entrance to the exit of the level without being hit be the lazers attached to the enemy patrols. The levels are randomly generated with few constraints on level generation", 
        downloadLink:"https://paultheindiedev.itch.io/tribeka"
    },
    {
        title: "Brokul",
        releaseInfo: "Realase: 29th of May 2020",
        gameImages: [{image : "../../../game_img/Brokul/pic_1.png"}, {image : "../../../game_img/Brokul/pic_2.png"}, {image : "../../../game_img/Brokul/pic_3.png"}, {image : "../../../game_img/Brokul/pic_4.png"}],
        gameInfo: "Brokul is a 2D puzzle game, with the main goal to get your little one (white square) to the yellow square, which can be reached by you, the player creating the path for your little one, by click on the squares to make them dissapear underneath yorur little one. The levels are randomly generated and there is always a solution for each level as a breadth first search is used verify that each generated level has a possible solution.", 
        downloadLink:"https://paultheindiedev.itch.io/brokul"
    },
    {
        title: "Tokembu",
        releaseInfo: "Realase: 22nd of May 2020",
        gameImages: [{image :"../../../game_img/Tokembu/pic_3.png"}, {image : "../../../game_img/Tokembu/pic_1.png"}, {image : "../../../game_img/Tokembu/pic_2.png"}, {image : "../../../game_img/Tokembu/pic_4.png"}],
        gameInfo: "Tokembu is a 2D puzzle game with the main goal being to get the correct coloured balls into their corresponding sockets. The levels are randomly generated with ablls having varying speeds which helps create the challnege as the difficulty increases.", 
        downloadLink:"https://paultheindiedev.itch.io/tokembu"
    }
]

export const projectsMiddleware = (state) => (next) => (action) => {
    switch (action.type) {
        case GET_PROJECTS:
            //temporary
            store.dispatch(updateProjects(projects));

            // getProjects()
            //     .then(res => res.json())
            //     .then(data => {
            //         if (data.status && data.status !== 202) {
            //             store.dispatch(updateMessage("Something wrong happened"))
            //         } else {
            //             store.dispatch(updateProjects(data.projects));
            //             store.dispatch(updateMessage(null))
            //         }
            //     })
            //     .catch(error => {
            //         console.log(error.message)
            //         store.dispatch(updateMessage("Something wrong happened"))
            //     })
            break;
        default:
            next(action);
    }
}

export default projectsMiddleware;