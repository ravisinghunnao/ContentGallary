$(document).ready(function () {
    var data = [
        {
            id: 1,
            title: "Lorem ipsum dolor sit amet",
            detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan tortor posuere ac ut consequat semper. Amet nisl purus in mollis nunc sed id semper risus. Duis convallis convallis tellus id interdum velit. Commodo quis imperdiet massa tincidunt nunc pulvinar. Egestas diam in arcu cursus euismod quis viverra nibh cras. Sed odio morbi quis commodo odio. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. Et pharetra pharetra massa massa ultricies mi. Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Elit eget gravida cum sociis natoque penatibus et magnis. Sed vulputate mi sit amet mauris commodo quis imperdiet massa. A scelerisque purus semper eget duis."
        },
        {
            id: 2,
            title: "Magna etiam tempor orci eu lobortis",
            detail: "Magna etiam tempor orci eu lobortis elementum nibh. Etiam non quam lacus suspendisse faucibus interdum posuere lorem. Nibh sit amet commodo nulla facilisi. Urna molestie at elementum eu facilisis sed odio morbi quis. Mattis enim ut tellus elementum sagittis vitae et leo duis. Dolor sit amet consectetur adipiscing. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Urna neque viverra justo nec. Sed id semper risus in. Sagittis vitae et leo duis ut diam quam nulla porttitor. Nisl purus in mollis nunc."
         }
        ,
        {
            id: 3,
            title: "Molestie nunc non blandit massa enim nec dui",
            detail: "Molestie nunc non blandit massa enim nec dui. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est. Amet risus nullam eget felis eget. Integer enim neque volutpat ac tincidunt vitae semper. Eget felis eget nunc lobortis mattis. Vulputate odio ut enim blandit volutpat maecenas. Nisi est sit amet facilisis magna etiam tempor orci eu. Mauris in aliquam sem fringilla ut morbi tincidunt. A diam sollicitudin tempor id eu. In est ante in nibh mauris cursus. Feugiat nisl pretium fusce id velit."
        }
        ,
        {
            id: 4,
            title: "Quam vulputate dignissim suspendisse in est ante in",
            detail: "Quam vulputate dignissim suspendisse in est ante in. In aliquam sem fringilla ut morbi tincidunt augue interdum. Lacus sed turpis tincidunt id. Nam at lectus urna duis convallis convallis. Netus et malesuada fames ac turpis egestas sed tempus urna. Sit amet porttitor eget dolor morbi non. Velit aliquet sagittis id consectetur purus ut faucibus. Id velit ut tortor pretium. Suspendisse potenti nullam ac tortor vitae. Elit ut aliquam purus sit amet luctus venenatis lectus magna."
        }
        ,
        {
            id: 5,
            title: "Erat imperdiet sed euismod nisi.",
            detail: "Erat imperdiet sed euismod nisi. Sed blandit libero volutpat sed cras ornare. Placerat vestibulum lectus mauris ultrices. Lectus proin nibh nisl condimentum id venenatis a condimentum. Vel turpis nunc eget lorem dolor sed. Nisl nunc mi ipsum faucibus vitae aliquet nec. In massa tempor nec feugiat nisl. Aliquam purus sit amet luctus venenatis. Nisl vel pretium lectus quam id leo in. Et molestie ac feugiat sed lectus vestibulum. Enim praesent elementum facilisis leo vel. Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Eget velit aliquet sagittis id consectetur purus. Dictum at tempor commodo ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames."
        }
        ,
        {
            id: 6,
            title: "Lobortis scelerisque fermentum dui faucibus in",
            detail: "Lobortis scelerisque fermentum dui faucibus in. Ornare arcu odio ut sem nulla pharetra diam sit. Tellus id interdum velit laoreet id donec ultrices tincidunt. Eget arcu dictum varius duis. Cras semper auctor neque vitae tempus. Aliquam nulla facilisi cras fermentum odio eu. Lacus sed viverra tellus in. Sed velit dignissim sodales ut eu sem integer vitae justo. Sed risus pretium quam vulputate dignissim suspendisse in est. Aenean et tortor at risus viverra adipiscing at in tellus. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget."
        }
        

    ];

    var options = {
        data: data
    }

    $(".content-gallary").contentGallary(options);
});