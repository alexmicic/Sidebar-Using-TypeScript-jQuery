declare var $;

class Sidebar {
    side: string;
    width: string;
    speed: number;
    holderId: HTMLElement;
    eventElementId: HTMLElement;
    constructor(holder: string, eventElement: string, side?: string, width?: string, speed?: number) {
        this.side = side;
        this.width = width;
        this.speed = speed;
        this.holderId = $(holder);
        this.eventElementId = $(eventElement);
    }
    init() {
        if (this.side != undefined) {
            if (this.side == 'right') {
                $(this.holderId).addClass('right');
            }
        }
        if (this.width != undefined) {
            $(this.holderId).css({
                'max-width': this.width
            });
        }
        if (this.width != undefined) {
            $(this.holderId).css({
                'transition-duration': ((this.speed) / 1000) + 's'
            });
        }

        // attach click event
        this.clickEvent();
    }
    clickEvent() {
        let holder = $(this.holderId);
        let elementBtn = $(this.eventElementId);
        let closeBtn = holder.find('a#sidebar-close');

        $(document).on('click', function (e) {
            var item = e.target;
            if ($(item).is(elementBtn)) {
                holder.addClass('active');
                return false;
            } else {
                if (!$(item).closest(holder).length || $(item).closest(closeBtn).length) {
                    if (holder.hasClass('active')) {
                        holder.removeClass('active');
                        return false;
                    }
                }
            }
        });
    }
};

window.onload = () => {
    var sidebarLeft = new Sidebar('#sidebar', '#open-left', 'left', '380px', 300);
    sidebarLeft.init();

    var sidebarRight = new Sidebar('#sidebar-right', '#open-right', 'right', '30%', 250);
    sidebarRight.init();
};