---
slug: philosophy-by-john-ousterhout
title: A Philosophy of Software Design, by John Ousterhout
---

This should not have been a book—for many reasons—it could as well have been a bullet list. The summary I have at the end of this article is the whole book. Skip there if you don’t care about my reasoning.

<!-- truncate -->

I first learned about John Ousterhout from a video on YouTube about Homa: a proposed better network protocol to replace TCP in data centers. A huge claim since TCP has stood the test of time despite its flaws; but John’s approach to argumentation in the video made me go search for anything the man had written. My assumption was: “If he does this well in a lecture, how awesome would his publications and books be?” That’s how I landed on the book in the title of this post. Finally, I thought, some philosophizing on software and its design.

It was clear, from the book, that John has a wealth of experience. Somehow, that did not translate into how the book was written—emphasis on “how” because the “what” had a lot of experience thrown into it. Why is this a concern? I did not see as much philosophy as marketed in the title of the book. The book read like something one of these new tech-bro-influencer types vibe-wrote on a live stream. Few central (and deep!) points, plenty of fluff.

> **p.s. (aside):** When writing this article, I originally (mistakenly) named it “Principles of Software Design” because that’s what I felt like I’d just finished reading; not “Philosophy of…“

If this book was called “Principles of…” or “Postulates of…”, it would have read better. This is because the book is pretty much its headings.

## Key Takeaways

1. **Complexity is**
   - Caused by dependency and obscurity;
   - Witnessed as change amplification, cognitive load, and unknown unknowns.
2. **Modules should be deep.**
3. **Pay attention to the interfaces.**
4. **Document clearly and consistently; in comments and in code.**
5. **Iterate on design.**

These are the five points which stood out to me from the book; with the first, on complexity, being the center (and if you ask me, the only) point in this book. Around these points, John shows his experience with verbose examples. Now… there’s a crowd for which such writing is required. My intuition (because an empirical lemma would require me to experiment) is that this crowd is those who rely heavily on memory and require constant repetition to memorize/learn. If you’re in this crowd, this book is perfect. I reckon (again, an intuition) that true software engineers—not the recent niche tutorial-baked crop—are logical thinkers, in primo, able to deduce the end of a statement once its form becomes salient. To this bunch, this book will be a waste of time.

---

## My 10 Commandments of Software Design
**as inspired by John Ousterhout**

1. If you must depend, depend explicitly.
2. Make the change simple, then make the simple change. *(Verbatim from Kent Beck)*
3. Deepen modules; for lesser cognitive load.
4. Start with documentation describing the what and why; not the how.
5. Beware of interfaces. Each one creates a new dependency.
6. Never intentionally obscure. Be consistently obvious to a fault.
7. Do not vibe code. Do a little design up front.
8. Document and iterate on your design.
9. Guard every changeset jealously. Complexity, like scope, creeps… until it’s too large to handle.
10. Pull complexity downwards. Expose as little complexity to your users.

---

## Java Examples Illustrating Key Principles

### 1. **If you must depend, depend explicitly.**
```java
class Database {
    private final Connection connection;

    public Database(Connection connection) {
        this.connection = connection;
    }
    
    public void query(String sql) {
        // Explicitly using the provided connection
        System.out.println("Executing: " + sql);
    }
}
```
*Explicit dependency injection ensures flexibility and reduces hidden dependencies.*

### 2. **Deepen modules; for lesser cognitive load.**
```java
class UserService {
    private final UserRepository userRepository;
    
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    
    public User getUserDetails(String userId) {
        return userRepository.findUserById(userId);
    }
}
```
*A deep module provides a simple interface while encapsulating complexity.*

### 3. **Beware of interfaces. Each one creates a new dependency.**
```java
interface PaymentGateway {
    void processPayment(double amount);
}

class StripePayment implements PaymentGateway {
    public void processPayment(double amount) {
        System.out.println("Processing payment with Stripe: " + amount);
    }
}
```
*Each interface must be carefully designed to avoid excessive dependencies.*

### 4. **Do not vibe code. Do a little design up front.**
```java
class ConfigLoader {
    private final Properties properties = new Properties();
    
    public ConfigLoader(String filePath) {
        try (FileInputStream fis = new FileInputStream(filePath)) {
            properties.load(fis);
        } catch (IOException e) {
            throw new RuntimeException("Failed to load config", e);
        }
    }
    
    public String getConfig(String key) {
        return properties.getProperty(key);
    }
}
```
*A simple design decision upfront prevents future maintenance headaches.*

---

## Conclusion

John Ousterhout's *A Philosophy of Software Design* offers valuable insights, but it lacks the depth and conciseness that would make it truly stand out. While the book is verbose, the core principles are solid and can be summarized in a few key points. If you prefer a more distilled and logical approach to software engineering, you may find the book unnecessary. However, if you thrive on repetition and detailed examples, it might be a useful read.

The Java examples above demonstrate how to apply some of these principles in practice. Whether or not you read the book, keeping these principles in mind will help you write better, more maintainable code.