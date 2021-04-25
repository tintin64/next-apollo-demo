import { memo } from 'react';
import { Heading2, Paragraph } from '../elements/typography';
import { ContactCard, Link } from '../elements/utilities';
import { Column, Row } from '../elements/layout';

type IUserCard = {
    user: {
        name: String,
        phone: String,
        email: String,
        address: {
            street: String,
            city: String,
            zipcode: String
        }
    }
}

const UserCard = memo(({ user: { name, phone, email, address} }: IUserCard) => (
    <Column medium={6}>
        <ContactCard title={name}>
            <Row>
                <Column>
                    <Heading2>{name}</Heading2>
                </Column>
                <Column xsmall={6}>
                    <Paragraph title={`Call ${name}`}>
                        <Link href={`tel: ${phone}`} title={`Call ${name}`}>
                            {phone}
                        </Link>
                    </Paragraph>
                    <Paragraph title={`Mail to ${name}`}>
                        <Link href={`mailto: ${email}`} title={`Mail to ${name}`}>
                            {email}
                        </Link>
                    </Paragraph>
                </Column>
                <Column xsmall={6}>
                    <Paragraph title={address.street}>{address.street}</Paragraph>
                    <Paragraph title={address.city}>{address.city}</Paragraph>
                    <Paragraph title={address.zipcode}>{address.zipcode}</Paragraph>
                </Column>
            </Row>
        </ContactCard>
    </Column>
));

export default UserCard