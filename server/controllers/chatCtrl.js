var chats = [];
module.exports = {

  getChats:function(req,res){
    res.send(chats);
  },
  postChats:function(req,res){
    chats.push(req.body)
    res.status(200).send(chats)
  },

  deleteChats:function(req,res){
    chats = []
    res.status(200).send('Chats deleted')
  }
}
