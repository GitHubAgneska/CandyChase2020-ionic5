
UNIT TESTING

jasmine Built-In Matchers

expect(array).toContain(member);
expect(fn).toThrow(string);
expect(fn).toThrowError(string);
expect(instance).toBe(instance);
expect(mixed).toBeDefined();
expect(mixed).toBeFalsy();
expect(mixed).toBeNull();
expect(mixed).toBeTruthy();
expect(mixed).toBeUndefined();
expect(mixed).toEqual(mixed);
expect(mixed).toMatch(pattern);
expect(number).toBeCloseTo(number, decimalPlaces);
expect(number).toBeGreaterThan(number);
expect(number).toBeLessThan(number);
expect(number).toBeNaN();
expect(spy).toHaveBeenCalled();
expect(spy).toHaveBeenCalledTimes(number);
expect(spy).toHaveBeenCalledWith(...arguments);



    ionViewDidLoad: Fired only when a view is stored in memory. This event is NOT fired on entering a view that is already cached. It’s a nice place for init related tasks.

    ionViewWillEnter: It’s fired when entering a page, before it becomes the active one. Use it for tasks you want to do every time you enter in the view (setting event listeners, updating a table, etc.).

    ionViewDidEnter: Fired when entering a page, after it becomes the active page. Quite similar to the previous one.

    ionViewWillLeave: Fired when you leave a page, before it stops being the active one. Use it for things you need to run every time you are leaving a page (deactivate event listeners, etc.).

    ionViewDidLeave: Fired when you leave a page, after it stops being the active one. Similar to the previous one.

    ionViewWillUnload: Fired when a view is going to be completely removed (after leaving a non-cached view).
