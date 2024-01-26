export function hover3dFactory(setUpTransform: boolean = true){

    function hover3d(node:HTMLElement) {

        // those anys are needed as a lazy fix to set them null on destroy (for garbage collection)
        let m : any = { x: 0, y: 0};
        let rm  : any = { x: 0, y: 0};
        let ws : any = { w: 1, h: 1};
        let cardAngle : any  = { x: 0, y: 0 };

        function handleMousemove(event: MouseEvent) {
            m.x = event.clientX;
            m.y = event.clientY;

            const rect = node?.getBoundingClientRect();
            rm.x = m.x - (rect?.left ?? 0); 
            rm.y = m.y - (rect?.top ?? 0);

            updateAngle();
        }

        function handleMouseleave(event: MouseEvent) {
            rm.x = 0;
            rm.y = 0;
            updateAngle();
        }

        function updateAngle(){
            ws = {
                w: node?.offsetWidth ?? 1,
                h: node?.offsetHeight ?? 1,
            };

            cardAngle = {
                x: rm.x == 0 ? 0 :  (0.5 - (rm.y / ws.h)) * 20,
                y: rm.y == 0 ? 0 : -(0.5 - (rm.x / ws.w)) * 20
            };
            updateStyle();
        }

        function updateStyle(){
            node.style.setProperty('--hover3d-xAngle', cardAngle.x+'deg');
            node.style.setProperty('--hover3d-yAngle', cardAngle.y+'deg');
        }

        node.addEventListener('mousemove', handleMousemove);
        node.addEventListener('mouseleave', handleMouseleave);
        
        if(setUpTransform){
            node.style.setProperty('transform-style', 'preserve-3d');
            node.style.setProperty('transform', 'perspective(1000px) translateZ(0) rotateX(var(--hover3d-xAngle)) rotateY(var(--hover3d-yAngle))');
        }

        return {
            destroy() {
                node.removeEventListener('mousemove', handleMousemove);
                node.removeEventListener('mouseleave', handleMouseleave);
                m = rm = ws = cardAngle = null;
            }
        };
    }

    return hover3d;
}