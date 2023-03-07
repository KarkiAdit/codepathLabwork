import React from "react";
import Card from "./Card";
const IndexBody = () => {
    const PlayerData = [
        {name: "Virat Kohli", description: "Born and raised in New Delhi, Kohli trained in West Delhi Cricket Academy; started his youth career with Delhi Under-15 team. Kohli made his international debut in 2008 and quickly became a key player in the ODI team.", image: 'images/virat-kohli.jpg' },
        {name: "Steve Smith", description: "Steven Peter Devereux Smith (born 2 June 1989) is an Australian international cricketer and former captain of the Australian national team. Smith is best known for his high consistency to score runs in Test cricket.", image: 'images/steve-smith.jpg' },
        {name: "Kane Williamson", description: "Kane Stuart Williamson (born 8 August 1990) is a New Zealand cricketer who is currently the captain of the New Zealand national team in limited overs cricket. Considered as one of the finest batsman New Zealand has ever produced, he is also one of the best batsman in the current era across all formats", image: 'images/kane-williamson.jpeg' },
        {name: "Babar Azam", description: "Babar Azam was born on 15 October 1994 into a Punjabi Muslim family. He was born in the Walled City and recalls the memories of 'playing cricket and roaming around like a free bird in those streets.'", image: 'images/babar-azam.jpeg' },
        {name: "Joe Root", description: "Joseph Edward Root, MBE (born 30 December 1990) is an English international cricketer, who plays for the England Test and One Day International (ODI) teams, and formerly captained the Test team. He also represents Yorkshire in English domestic cricket.", image: 'images/joe-root.jpeg' },
        {name: "David Warner", description: "David Andrew Warner (born 27 October 1986) is an Australian international cricketer and a former captain of the Australian national team in limited overs format and a former Test vice-captain. A left-handed opening batsman, Warner is the first Australian cricketer in 132 years to be selected for a national team in any format without experience in first-class cricket.", image: 'images/david-warner.jpg' },
        {name: "Dale Steyn", description: "Steyn dominated the number one spot in the ICC Test rankings during the peak of his career, for a record 263 weeks between 2008 and 2014. Sri Lankan Muttiah Muralitharan sits next on the list with 214 weeks.", image: 'images/dale-steyn.jpeg' },
        {name: "Ab De Villagers", description: "Abraham Benjamin de Villiers (born 17 February 1984) is a former South African international cricketer. AB de Villiers was named as the ICC ODI Player of the Year three times during his 15-year international career and was one of the five Wisden cricketers of the decade at the end of 2019", image: 'images/ab-de-villagers.jpg' },
        {name: "Rashid Khan", description: "He was one of the eleven cricketers to play in Afghanistan's first ever Test match, against India, in June 2018. He returned the most expensive bowling figures by a debutant in a nation's maiden Test match.[3] In September 2019, he led the team in the one-off Test against Bangladesh, and at the age of 20 years and 350 days, became the youngest cricketer to captain a Test match side.", image: 'images/rashid-khan.jpeg' },
        {name: "Kieron Pollard", description: "Kieron Adrian Pollard (born 12 May 1987) is a Trinidadian who is a former West Indies cricketer. He has captained the West Indies cricket team in limited overs cricket. He currently plays in various T20 leagues around the globe as an all-rounder. He was part of the 2012 ICC World T20 winning team for West Indies.", image: 'images/kieron-pollard.jpg' },
        {name: "Jasprit Bumrah", description: "Jasprit Jasbirsingh Bumrah (born 6 December 1993) is an Indian international cricketer who plays for the Indian national cricket team in all formats of the game.", image: 'images/jasprit-bumrah.jpeg' }
    ]
    return (
            <div className="container">
                {PlayerData.map((player) => {
                    return (<Card playerName={player.name} playerInfo={player.description} playerImageSrc={player.image} />)
                })}
            </div>)
}

export default IndexBody;