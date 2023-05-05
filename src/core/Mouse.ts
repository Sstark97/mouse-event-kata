class MousePointerCoordinates {
    private x: number;
    private y: number;
}

export class Mouse {
    private listeners: MouseEventListener[] = [];
    private leftButtonPressed = false
    private timeWindowInMillisecondsForDoubleClick = 500;

    public pressLeftButton(currentTimeInMilliseconds: number) {
        /*... implement this method ...*/
        this.leftButtonPressed = true
    }

    public releaseLeftButton(currentTimeInMilliseconds: number) {
        /*... implement this method ...*/
        this.leftButtonPressed = false
        // It should only notify the following event when position is the same
        this.notifySubscribers(MouseEventType.SingleClick)
    }

    public move(
        from: MousePointerCoordinates,
        to: MousePointerCoordinates,
        currentTimeInMilliseconds: number
    ) {
        /*... implement this method ...*/
    }

    public subscribe(listener: MouseEventListener) {
        this.listeners.push(listener);
    }

    private notifySubscribers(eventType: MouseEventType) {
        this.listeners.forEach((listener) => listener.handleMouseEvent(eventType));
    }
}

export enum MouseEventType {
    SingleClick,
    DoubleClick,
    TripleClick,
    Drag,
    Drop
}
export interface MouseEventListener {
    handleMouseEvent(eventType: MouseEventType );
}