import typia from "../../../../src";
import { _test_assertParse } from "../../../internal/_test_assertParse";
import { ArrayRecursiveUnionImplicit } from "../../../structures/ArrayRecursiveUnionImplicit";

export const test_assertParse_ArrayRecursiveUnionImplicit = _test_assertParse(
    "ArrayRecursiveUnionImplicit",
    ArrayRecursiveUnionImplicit.generate,
    (input) =>
        ((input: string): typia.Primitive<ArrayRecursiveUnionImplicit> => {
            const assert = (input: any): ArrayRecursiveUnionImplicit => {
                const $guard = (typia.assertParse as any).guard;
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ArrayRecursiveUnionImplicit => {
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("number" === typeof input.id &&
                            Number.isFinite(input.id)) ||
                            $guard(_exceptionable, {
                                path: _path + ".id",
                                expected: "number",
                                value: input.id,
                            })) &&
                        ("string" === typeof input.name ||
                            $guard(_exceptionable, {
                                path: _path + ".name",
                                expected: "string",
                                value: input.name,
                            })) &&
                        ("string" === typeof input.path ||
                            $guard(_exceptionable, {
                                path: _path + ".path",
                                expected: "string",
                                value: input.path,
                            })) &&
                        (Array.isArray(input.children) ||
                            $guard(_exceptionable, {
                                path: _path + ".children",
                                expected:
                                    "Array<(Resolve<ArrayRecursiveUnionImplicit.IDirectory> | Resolve<ArrayRecursiveUnionImplicit.IImageFile> | Resolve<ArrayRecursiveUnionImplicit.ISharedDirectory> | Resolve<ArrayRecursiveUnionImplicit.IShortcut> | Resolve<ArrayRecursiveUnionImplicit.ITextFile> | Resolve<ArrayRecursiveUnionImplicit.IZipFile>)>",
                                value: input.children,
                            })) &&
                        input.children.every(
                            (elem: any, _index2: number) =>
                                (("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            ".children[" +
                                            _index2 +
                                            "]",
                                        expected:
                                            "(Resolve<ArrayRecursiveUnionImplicit.IDirectory> | Resolve<ArrayRecursiveUnionImplicit.IImageFile> | Resolve<ArrayRecursiveUnionImplicit.ISharedDirectory> | Resolve<ArrayRecursiveUnionImplicit.IShortcut> | Resolve<ArrayRecursiveUnionImplicit.ITextFile> | Resolve<ArrayRecursiveUnionImplicit.IZipFile>)",
                                        value: elem,
                                    })) &&
                                $au0(
                                    elem,
                                    _path + ".children[" + _index2 + "]",
                                    true && _exceptionable,
                                ),
                        );
                    const $ao1 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("read" === input.access ||
                            "write" === input.access ||
                            $guard(_exceptionable, {
                                path: _path + ".access",
                                expected: '("read" | "write")',
                                value: input.access,
                            })) &&
                        (("number" === typeof input.id &&
                            Number.isFinite(input.id)) ||
                            $guard(_exceptionable, {
                                path: _path + ".id",
                                expected: "number",
                                value: input.id,
                            })) &&
                        ("string" === typeof input.name ||
                            $guard(_exceptionable, {
                                path: _path + ".name",
                                expected: "string",
                                value: input.name,
                            })) &&
                        ("string" === typeof input.path ||
                            $guard(_exceptionable, {
                                path: _path + ".path",
                                expected: "string",
                                value: input.path,
                            })) &&
                        (Array.isArray(input.children) ||
                            $guard(_exceptionable, {
                                path: _path + ".children",
                                expected:
                                    "Array<(Resolve<ArrayRecursiveUnionImplicit.IDirectory> | Resolve<ArrayRecursiveUnionImplicit.IImageFile> | Resolve<ArrayRecursiveUnionImplicit.ISharedDirectory> | Resolve<ArrayRecursiveUnionImplicit.IShortcut> | Resolve<ArrayRecursiveUnionImplicit.ITextFile> | Resolve<ArrayRecursiveUnionImplicit.IZipFile>)>",
                                value: input.children,
                            })) &&
                        input.children.every(
                            (elem: any, _index3: number) =>
                                (("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            ".children[" +
                                            _index3 +
                                            "]",
                                        expected:
                                            "(Resolve<ArrayRecursiveUnionImplicit.IDirectory> | Resolve<ArrayRecursiveUnionImplicit.IImageFile> | Resolve<ArrayRecursiveUnionImplicit.ISharedDirectory> | Resolve<ArrayRecursiveUnionImplicit.IShortcut> | Resolve<ArrayRecursiveUnionImplicit.ITextFile> | Resolve<ArrayRecursiveUnionImplicit.IZipFile>)",
                                        value: elem,
                                    })) &&
                                $au0(
                                    elem,
                                    _path + ".children[" + _index3 + "]",
                                    true && _exceptionable,
                                ),
                        );
                    const $ao2 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("number" === typeof input.id &&
                            Number.isFinite(input.id)) ||
                            $guard(_exceptionable, {
                                path: _path + ".id",
                                expected: "number",
                                value: input.id,
                            })) &&
                        ("string" === typeof input.name ||
                            $guard(_exceptionable, {
                                path: _path + ".name",
                                expected: "string",
                                value: input.name,
                            })) &&
                        ("string" === typeof input.path ||
                            $guard(_exceptionable, {
                                path: _path + ".path",
                                expected: "string",
                                value: input.path,
                            })) &&
                        (("number" === typeof input.width &&
                            Number.isFinite(input.width)) ||
                            $guard(_exceptionable, {
                                path: _path + ".width",
                                expected: "number",
                                value: input.width,
                            })) &&
                        (("number" === typeof input.height &&
                            Number.isFinite(input.height)) ||
                            $guard(_exceptionable, {
                                path: _path + ".height",
                                expected: "number",
                                value: input.height,
                            })) &&
                        ("string" === typeof input.url ||
                            $guard(_exceptionable, {
                                path: _path + ".url",
                                expected: "string",
                                value: input.url,
                            })) &&
                        (("number" === typeof input.size &&
                            Number.isFinite(input.size)) ||
                            $guard(_exceptionable, {
                                path: _path + ".size",
                                expected: "number",
                                value: input.size,
                            }));
                    const $ao3 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("number" === typeof input.id &&
                            Number.isFinite(input.id)) ||
                            $guard(_exceptionable, {
                                path: _path + ".id",
                                expected: "number",
                                value: input.id,
                            })) &&
                        ("string" === typeof input.name ||
                            $guard(_exceptionable, {
                                path: _path + ".name",
                                expected: "string",
                                value: input.name,
                            })) &&
                        ("string" === typeof input.path ||
                            $guard(_exceptionable, {
                                path: _path + ".path",
                                expected: "string",
                                value: input.path,
                            })) &&
                        (("number" === typeof input.size &&
                            Number.isFinite(input.size)) ||
                            $guard(_exceptionable, {
                                path: _path + ".size",
                                expected: "number",
                                value: input.size,
                            })) &&
                        ("string" === typeof input.content ||
                            $guard(_exceptionable, {
                                path: _path + ".content",
                                expected: "string",
                                value: input.content,
                            }));
                    const $ao4 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("number" === typeof input.id &&
                            Number.isFinite(input.id)) ||
                            $guard(_exceptionable, {
                                path: _path + ".id",
                                expected: "number",
                                value: input.id,
                            })) &&
                        ("string" === typeof input.name ||
                            $guard(_exceptionable, {
                                path: _path + ".name",
                                expected: "string",
                                value: input.name,
                            })) &&
                        ("string" === typeof input.path ||
                            $guard(_exceptionable, {
                                path: _path + ".path",
                                expected: "string",
                                value: input.path,
                            })) &&
                        (("number" === typeof input.size &&
                            Number.isFinite(input.size)) ||
                            $guard(_exceptionable, {
                                path: _path + ".size",
                                expected: "number",
                                value: input.size,
                            })) &&
                        (("number" === typeof input.count &&
                            Number.isFinite(input.count)) ||
                            $guard(_exceptionable, {
                                path: _path + ".count",
                                expected: "number",
                                value: input.count,
                            }));
                    const $ao5 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("number" === typeof input.id &&
                            Number.isFinite(input.id)) ||
                            $guard(_exceptionable, {
                                path: _path + ".id",
                                expected: "number",
                                value: input.id,
                            })) &&
                        ("string" === typeof input.name ||
                            $guard(_exceptionable, {
                                path: _path + ".name",
                                expected: "string",
                                value: input.name,
                            })) &&
                        ("string" === typeof input.path ||
                            $guard(_exceptionable, {
                                path: _path + ".path",
                                expected: "string",
                                value: input.path,
                            })) &&
                        (("object" === typeof input.target &&
                            null !== input.target) ||
                            $guard(_exceptionable, {
                                path: _path + ".target",
                                expected:
                                    "(Resolve<ArrayRecursiveUnionImplicit.IDirectory> | Resolve<ArrayRecursiveUnionImplicit.IImageFile> | Resolve<ArrayRecursiveUnionImplicit.ISharedDirectory> | Resolve<ArrayRecursiveUnionImplicit.IShortcut> | Resolve<ArrayRecursiveUnionImplicit.ITextFile> | Resolve<ArrayRecursiveUnionImplicit.IZipFile>)",
                                value: input.target,
                            })) &&
                        $au0(
                            input.target,
                            _path + ".target",
                            true && _exceptionable,
                        );
                    const $au0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): any =>
                        (() => {
                            if (undefined !== input.access)
                                return $ao1(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if (undefined !== input.width)
                                return $ao2(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if (undefined !== input.content)
                                return $ao3(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if (undefined !== input.count)
                                return $ao4(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if (undefined !== input.target)
                                return $ao5(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            return $ao0(input, _path, true && _exceptionable);
                        })();
                    return (
                        (Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected:
                                    "Array<(Resolve<ArrayRecursiveUnionImplicit.IDirectory> | Resolve<ArrayRecursiveUnionImplicit.IImageFile> | Resolve<ArrayRecursiveUnionImplicit.ISharedDirectory> | Resolve<ArrayRecursiveUnionImplicit.IShortcut> | Resolve<ArrayRecursiveUnionImplicit.ITextFile> | Resolve<ArrayRecursiveUnionImplicit.IZipFile>)>",
                                value: input,
                            })) &&
                        input.every(
                            (elem: any, _index1: number) =>
                                (("object" === typeof elem && null !== elem) ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            "(Resolve<ArrayRecursiveUnionImplicit.IDirectory> | Resolve<ArrayRecursiveUnionImplicit.IImageFile> | Resolve<ArrayRecursiveUnionImplicit.ISharedDirectory> | Resolve<ArrayRecursiveUnionImplicit.IShortcut> | Resolve<ArrayRecursiveUnionImplicit.ITextFile> | Resolve<ArrayRecursiveUnionImplicit.IZipFile>)",
                                        value: elem,
                                    })) &&
                                $au0(elem, _path + "[" + _index1 + "]", true),
                        )
                    );
                })(input, "$input", true);
                return input;
            };
            input = JSON.parse(input);
            return assert(input);
        })(input),
    ArrayRecursiveUnionImplicit.SPOILERS,
);