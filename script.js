class Paticipant{
    constructor(name)
    {
       this.name=name; 
       this.chatRoom=null;
       this.message=[];// 채팅방 참가자들이 쓰는 message data를 말함

    }
    send(message,to) // 메세지의 내용과  누구에게 보낼지.
    {
        this.chatRoom.send(message,this,to); // 채팅룸에 메세지보내기
        //여기서 this.chatRoom 은 밑에 chatRoom 전체를 말합니다.
        //여기서의 this = Paticipant를 의미합니다.
        
        
    }//이녀석은 Method
    
    receive(message,from)
    {
        this.message.push({message,from}); // 메세지와 누구로부터 온지받기
        
    }

    showMessage()
    {
        console.log(this.message); //
    }


}
//Mediator를 위한 클래스
class ChatRoom {
    constructor()
    {
        this.Participants={} //객체 선언 
    }
    enter(participant)
    {
        this.Participants[participant.name]=participant;
        participant.chatRoom=this;
        /*
        participant.chatRoom 과정에서 . 

participant.chatRoom =this는  Participant 클래스의 chatRoom =null값에다가

ChatRoom 객체를 연결해준것과 같다
        */
    }

    send(message,participant,to) //Paticipant에서 this.chatRoom.send는 이메소드호출.
    {
        this.Participants[to.name].receive(message,participant);// 
        //Paticipant 의 send 메소드 > Mediator에 send로 연결해서 send로 값이 나오게함
        // 이게 Mediator 패턴임.
    }

}



const chatRoom=new ChatRoom();

const user1=new Paticipant('user1');
const user2=new Paticipant('user2');
const user3=new Paticipant('user3');

chatRoom.enter(user1);
chatRoom.enter(user2);
chatRoom.enter(user3);
console.log(chatRoom);
console.log(user1);

user1.send('hello',user2);
user1.send('hello2323',user2);
