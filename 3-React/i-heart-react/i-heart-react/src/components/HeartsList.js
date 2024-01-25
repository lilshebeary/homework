import CandyColoredHeart from "./CandyColoredHeart";

const messages = [
  'cuddles',
  'be my <3',
  'my bear',
  'too cute',
  'dream big',
  'kiss me',
  'be mine',
  'love bug',
  'my love',
  'sweetie pie',
  'crazy 4u',
  'true love',
  'heart me',
  'dear heart',
  'you r cute',
  'hug me',
  'xoxo',
  'i <3 u',
  'first kiss',
  'me + u',
  'cuddles',
  'be my <3',
  'my bear',
  'too cute',
  'dream big',
  'kiss me',
  'be mine',
  'love bug',
  'my love',
  'sweetie pie',
  'crazy 4u',
  'true love',
  'heart me',
  'dear heart',
  'you r cute',
  'hug me',
  'xoxo',
  'i <3 u',
  'first kiss',
  'me + u',
];

const HeartsList = (props) => {
  return (
    <div className="outer">
      <div className='hearts-container'>
        {messages.map((message, idx) => <CandyColoredHeart msg={message} key={idx} fill={props.col} /> )}
      </div>
    </div>
   
  )
}

export default HeartsList;
