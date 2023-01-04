import { addDoc, collection, Timestamp } from "firebase/firestore/lite";
import { firestore } from "../../clientApp";

type ContactFormProps = {
    name: string;
    email: string;
    comment: string;
};
export const sendContactForm = async ({ name, email, comment }: ContactFormProps) => {
    try {
        const ref = collection(firestore, "contact");
        await addDoc(ref, {
            name,
            email,
            comment,
            sentAt: Timestamp.now().toDate(),
        });
        return 0;
    } catch (err) {
        console.log(err)
        return -1;
    }
};