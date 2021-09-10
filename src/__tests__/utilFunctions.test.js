import { shortenText } from '../utils/functions';
import { wordCount } from '../../server/utils';
import { attachUserName } from '../../server/utils';
import { shortText, longText, posts, users } from './__data__/testData';

test('make sure shortenText will not alter a string under 100 characters', ()=> {
    expect(shortenText(shortText)).toHaveLength(29);
})

test('make sure shortenText shortens text over 100 characters & adds 3 ... at the end', ()=> {
    const shortened = shortenText(longText);
    expect(shortened).not.toHaveLength(longText.length);
    expect(shortened.slice(-3)).toBe('...');
})

test('check posts array and return word count', ()=> {
    expect(wordCount(posts)).toEqual(233);
})

test('check to see if first post returned from attachUserName has a property displayName', ()=> {
    const newPosts = attachUserName(users, posts);
    expect(newPosts[0]).toHaveProperty('displayName');
})

test('check that attachUserName removes any post with no matching user', ()=> {
    const newPosts = attachUserName(users, posts);
    const deletedPost = posts[5];
    expect(newPosts).not.toContainEqual(deletedPost);
})

