import { bind, throttle, memoize } from '..';
class C {
    @bind
    foo() { }

    @throttle
    moo() { }

    @throttle(1000)
    mooWithCustomDelay() { }

    @memoize
    mem() { }

    @memoize(true)
    memWithConfig() { }
}