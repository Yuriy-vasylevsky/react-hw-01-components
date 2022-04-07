import Profile from './components/Profile/Profile';
import user from './components/Profile/user';

import Statistics from './components/Statistics/Statistics';
import data from './components/Statistics/data';

import friends from './components/FriendList/friends';
import FriendList from './components/FriendList/FriendList';

import transactions from './components/TransactionHistory/transactions';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import Container from 'components/Container/Container';
import Section from './components/Section/Section';

export default function App() {
  return (
    <Container>
      <Section>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
      </Section>

      <Section classNames="test">
        <FriendList friends={friends} />
      </Section>

      <Section>
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
      </Section>

      <Section>
        <TransactionHistory items={transactions} />
      </Section>
    </Container>
  );
}
