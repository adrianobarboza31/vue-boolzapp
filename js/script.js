const{createApp}=Vue;
createApp({
    data(){
        return{
            isActive:false,
            lunghezza:0,
            searchTerm:"",
            invia:"",
            indice:0,
            contacts: [
                {   id:0,
                    name: 'Michele',
                    avatar: '_1',
                    image:'./img/avatar_1.jpg',
                    visible: true,
                    messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                    }
                    ],
                    },
                    {
                        id:1,
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    image:'./img/avatar_2.jpg',
                    messages: [
                    {
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                    },
                    {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                    },
                    {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                    }
                    ],
                    },
                    {
                        id:2,
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    image:'./img/avatar_3.jpg',
                    messages: [
                    {
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                    },
                    {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                    },
                    {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received'
                    }
                    ],
                    },
                    {
                        id:3,
                    name: 'Alessandro B.',
                    avatar: '_4',
                    image:'./img/avatar_4.jpg',
                    visible: true,
                    messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                    }
                    ],
                    },
                    {
                        id:4,
                    name: 'Alessandro L.',
                    avatar: '_5',
                    image:'./img/avatar_5.jpg',
                    visible: true,
                    messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Ricordati di chiamare la nonna',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Va bene, stasera la sento',
                    status: 'received'
                    }
                    ],
                    },
                    {
                        id:5,
                    name: 'Claudia',
                    avatar: '_6',
                    image:'./img/avatar_6.jpg',
                    visible: true,
                    messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao Claudia, hai novit???',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Non ancora',
                    status: 'received'
                    },
                    {
                    date: '10/01/2020 15:51:00',
                    message: 'Nessuna nuova, buona nuova',
                    status: 'sent'
                    }
                    ],
                    },
                    {
                        id:6,
                    name: 'Federico',
                    avatar: '_7',
                    image:'./img/avatar_7.jpg',
                    visible: true,
                    messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Fai gli auguri a Martina che ?? il suo compleanno!',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Grazie per avermelo ricordato, le scrivo subito!',
                    status: 'received'
                    }
                    ],
                    },
                    {
                        id:7,
                    name: 'Davide',
                    avatar: '_8',
                    image:'./img/avatar_8.jpg',
                    visible: true,
                    messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao, andiamo a mangiare la pizza stasera?',
                    status: 'received'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'No, l\'ho gi?? mangiata ieri, ordiniamo sushi!',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:51:00',
                    message: 'OK!!',
                    status: 'received'
                    }
                    ],
                    }
                ]
        }
    }, methods:{
        slider(id){
           this.indice=this.contacts.findIndex((value)=>value.id===id)
        },
        invmes(){
            const ogg={
                date: '10/01/2020 15:51:00',
                message: this.invia,
                status: 'sent'
                }
               this.contacts[this.indice].messages.push(ogg)
               this.invia=""
        const risposta=()=>{
            const oggt={
                            date: '10/01/2020 15:51:00',
                            message: "ok",
                            status: 'received'
                            }
                           this.contacts[this.indice].messages.push(oggt)
                         
                        //    element.scrollIntoView()
                       }
                       setTimeout(risposta,1000)
        }, 
        myfilter(){
            this.isActive=!this.isActive
            console.log(this.isActive)
        },
        leave(){
            this.isActive=false 
        },
        remove(i){
            this.contacts[this.indice].messages.splice(i,1)
        }
    },
    computed:{
        filteredContacts(){
            return this.contacts.filter((value)=>{
                const name=value.name.toLowerCase();
                return name.includes(this.searchTerm.toLowerCase())
            })
        }
    }
}).mount("#app")
