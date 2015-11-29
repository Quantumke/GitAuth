if (Meteor.isClient){
    Template.body.helper({
        task:[
            {text:"Task 1"},
            {text:"Task 2"},
            {text:"Task 3"}
        ]
    })
}
