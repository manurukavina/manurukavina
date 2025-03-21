import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from '../pages/index.module.css';

function MastodonPosts() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const accessToken = '3X2mpFqkyQ5FyiwPQMQB9gvjEKfReUtw9OrNKk-wySk';
    const instanceUrl = 'https://mastodon.social';

    useEffect(() => {
        async function fetchAccountIdAndPosts() {
            try {
                setLoading(true);
                const accountResponse = await fetch(
                    `${instanceUrl}/api/v1/accounts/verify_credentials`,
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    }
                );
                if (!accountResponse.ok) {
                    throw new Error('Failed to verify credentials');
                }
                const accountData = await accountResponse.json();
                const accountId = accountData.id;

                const postsResponse = await fetch(
                    `${instanceUrl}/api/v1/accounts/${accountId}/statuses?limit=5`,
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    }
                );
                if (!postsResponse.ok) {
                    throw new Error('Failed to fetch posts');
                }
                const postsData = await postsResponse.json();
                setPosts(Array.isArray(postsData) ? postsData : []);
            } catch (error) {
                console.error('Error fetching Mastodon posts:', error);
                setError(error.message);
                setPosts([]);
            } finally {
                setLoading(false);
            }
        }
        fetchAccountIdAndPosts();
    }, []);

    return (
        <section className="container padding--lg">
            <Heading as="h2" className="text--center margin-bottom--lg">
                Latest Mastodon Posts
            </Heading>
            {loading ? (
                <div className={clsx('text--center', styles.loading)}>
                    <span>Loading posts...</span>
                </div>
            ) : error ? (
                <div className={clsx('alert alert--danger', styles.alert)}>
                    <strong>Oops!</strong> {error}
                </div>
            ) : posts.length === 0 ? (
                <p className="text--center">No posts available</p>
            ) : (
                <div className="row">
                    {posts.map((post) => (
                        <div key={post.id} className="col col--12 col--md-6 col--lg-4 margin-bottom--lg" style={{margin: '1em'}}>
                            <div className={clsx('card', styles.card)}>
                                <div className={clsx('card__header', styles.cardHeader)}>
                                    <small className={styles.cardDate}>
                                        <b>@manurukavina</b>
                                        <br></br>
                                        {new Date(post.created_at).toLocaleDateString()}
                                    </small>
                                </div>
                                <div className="card__body">
                                    <div
                                        className={styles.cardContent}
                                        dangerouslySetInnerHTML={{ __html: post.content }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}

export default MastodonPosts;