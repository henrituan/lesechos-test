import { describe, it, expect } from "vitest";
import { getUserPermission } from "./newsletter.actions";
import { NEWSLETTER_ITEMS } from "@/mocks/newsletters";
import {
  USER_WITH_MULTIPLE_SUBSCRIPTION,
  USER_WITH_ONE_SUBSCRIPTION,
  USER_WITHOUT_SUBSCRIPTION,
} from "@/mocks/user";

describe("getUserPermission", () => {
  it('should return "can_register" when article has no subscription requirements', () => {
    // Find a newsletter with no subscriptions (e.g. "Artistic Avenues")
    const publicNewsletter = NEWSLETTER_ITEMS.find(
      (n) => n.subscriptions.length === 0
    );
    if (!publicNewsletter)
      throw new Error("No public newsletter found in mocks");

    const permission = getUserPermission(
      publicNewsletter.subscriptions,
      USER_WITHOUT_SUBSCRIPTION.subscriptions
    );
    expect(permission).toBe("can_register");
  });

  it('should return "need_subscribe" when user has no subscriptions for a restricted article', () => {
    // Find a newsletter with subscriptions (e.g. "Weekly Wonders" requires "RIGHT_1")
    const restrictedNewsletter = NEWSLETTER_ITEMS.find((n) =>
      n.subscriptions.includes("RIGHT_1")
    );
    if (!restrictedNewsletter)
      throw new Error("No restricted newsletter found in mocks");

    const permission = getUserPermission(
      restrictedNewsletter.subscriptions,
      USER_WITHOUT_SUBSCRIPTION.subscriptions
    );
    expect(permission).toBe("need_subscribe");
  });

  it('should return "can_register" when user has the required subscription', () => {
    const restrictedNewsletter = NEWSLETTER_ITEMS.find((n) =>
      n.subscriptions.includes("RIGHT_1")
    );
    if (!restrictedNewsletter)
      throw new Error("No restricted newsletter found in mocks");

    const permission = getUserPermission(
      restrictedNewsletter.subscriptions,
      USER_WITH_ONE_SUBSCRIPTION.subscriptions
    );
    expect(permission).toBe("can_register");
  });

  it('should return "can_register" when user has multiple subscriptions including the required one', () => {
    const restrictedNewsletter = NEWSLETTER_ITEMS.find((n) =>
      n.subscriptions.includes("RIGHT_1")
    );
    if (!restrictedNewsletter)
      throw new Error("No restricted newsletter found in mocks");

    const permission = getUserPermission(
      restrictedNewsletter.subscriptions,
      USER_WITH_MULTIPLE_SUBSCRIPTION.subscriptions
    );
    expect(permission).toBe("can_register");
  });

  it('should return "need_subscribe" when user has subscriptions but not the required one', () => {
    // Find newsletter requiring RIGHT_2
    const right2Newsletter = NEWSLETTER_ITEMS.find((n) =>
      n.subscriptions.includes("RIGHT_2")
    );
    if (!right2Newsletter)
      throw new Error("No RIGHT_2 newsletter found in mocks");

    // USER_WITH_ONE_SUBSCRIPTION has RIGHT_1
    const permission = getUserPermission(
      right2Newsletter.subscriptions,
      USER_WITH_ONE_SUBSCRIPTION.subscriptions
    );
    expect(permission).toBe("need_subscribe");
  });
});
