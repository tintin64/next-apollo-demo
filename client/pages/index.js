import Link from 'next/link'
import Name from '../app/components/Name'

const Page = () => (
    <div>
        Welcome, <Name />
        <br/><br/>
        <Link href="/about"><a>About</a></Link>
            <br />
            <Link href="/users"><a>Users</a></Link>
            <br />
            <Link href="/users-paginated"><a>Users with GraphQL pagination</a></Link>
    </div>
);

export default Page;
