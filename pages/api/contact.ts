import { addDoc, collection, Timestamp } from "firebase/firestore/lite";
import { firestore } from "../../clientApp";

type ContactFormProps = {
    name: string
    surname: string
    email: string
    mobileNumber?: string
    date: string
    venue?: string
    message: string

};
export const sendContactForm = async ({ name, surname, email, mobileNumber, date, venue, message }: ContactFormProps) => {
    try {
        const ref = collection(firestore, "contacts");
        await addDoc(ref, {
            name,
            surname,
            email,
            mobileNumber,
            date,
            venue,
            message,
            sentAt: Timestamp.now().toDate(),
        });
        return 0;
    } catch (err) {
        console.log(err)
        return -1;
    }
};