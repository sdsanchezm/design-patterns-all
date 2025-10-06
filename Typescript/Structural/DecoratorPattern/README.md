# Diagrams

## 

~~~mermaid
classDiagram
    class Notification {
        <<interface>>
        +send(message: string) void
    }

    class BasicNotification {
        +send(message: string) void
    }

    class NotificationDecorator {
        <<abstract>>
        -notification: Notification
        +send(message: string) void
    }

    class EmailDecorator {
        -sendEmail(message: string) void
        +send(message: string) void
    }

    class SMSDecorator {
        -sendSMS(message: string) void
        +send(message: string) void
    }

    Notification <|.. BasicNotification : implements
    Notification <|.. NotificationDecorator : implements
    NotificationDecorator <|-- EmailDecorator : extends
    NotificationDecorator <|-- SMSDecorator : extends
    NotificationDecorator o--> "1" Notification : contains
~~~