/* @ds-bundle: {"format":4,"namespace":"CLMSDesignSystem_205a7b","components":[{"name":"Button","sourcePath":"components/Button/Button.jsx"},{"name":"Card","sourcePath":"components/Card/Card.jsx"},{"name":"Chip","sourcePath":"components/Chip/Chip.jsx"},{"name":"EmptyState","sourcePath":"components/EmptyState/EmptyState.jsx"},{"name":"Field","sourcePath":"components/Field/Field.jsx"},{"name":"IconBtn","sourcePath":"components/IconBtn/IconBtn.jsx"},{"name":"Input","sourcePath":"components/Input/Input.jsx"},{"name":"Tag","sourcePath":"components/Tag/Tag.jsx"},{"name":"Textarea","sourcePath":"components/Textarea/Textarea.jsx"}],"sourceHashes":{"components/Button/Button.jsx":"1e9856dd7ac2","components/Card/Card.jsx":"8bb3adff9f56","components/Chip/Chip.jsx":"e80226427fcf","components/EmptyState/EmptyState.jsx":"38bb939b799c","components/Field/Field.jsx":"d3bf08f7adcc","components/IconBtn/IconBtn.jsx":"02054f58d0ee","components/Input/Input.jsx":"7d54b343a678","components/Tag/Tag.jsx":"54e114c533bb","components/Textarea/Textarea.jsx":"12b438ab77da","ui_kits/clms-web/AddQuestionScreen.jsx":"ddb04adb6a00","ui_kits/clms-web/App.jsx":"b881680fb5d7","ui_kits/clms-web/BulkUploadScreen.jsx":"dd6162db1e54","ui_kits/clms-web/LoginScreen.jsx":"88aa360c77e2","ui_kits/clms-web/Primitives.jsx":"41da0161451f","ui_kits/clms-web/QuestionLibraryScreen.jsx":"d9566a123f65","ui_kits/clms-web/Shell.jsx":"0298dfdd5c3c","ui_kits/clms-web/ViewQuestionScreen.jsx":"b7f7f9c4dcb6","ui_kits/clms-web/data.js":"2b0013f4b7ac"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CLMSDesignSystem_205a7b = window.CLMSDesignSystem_205a7b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/Button/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant = 'primary',
  size = 'md',
  leadingIcon,
  trailingIcon,
  children,
  ...rest
}) {
  const cls = ['btn', 'btn--' + variant];
  if (size === 'sm') cls.push('btn--sm');
  if (size === 'lg') cls.push('btn--lg');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls.join(' ')
  }, rest), leadingIcon ? /*#__PURE__*/React.createElement("i", {
    className: 'ri-' + leadingIcon
  }) : null, /*#__PURE__*/React.createElement("span", null, children), trailingIcon ? /*#__PURE__*/React.createElement("i", {
    className: 'ri-' + trailingIcon
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Button/Button.jsx", error: String((e && e.message) || e) }); }

// components/Card/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  padded = true,
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: 'card ' + (padded ? 'card__padded ' : '') + className
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Card/Card.jsx", error: String((e && e.message) || e) }); }

// components/Chip/Chip.jsx
try { (() => {
function Chip({
  status = 'draft',
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: 'chip chip--' + status
  }, children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Chip/Chip.jsx", error: String((e && e.message) || e) }); }

// components/EmptyState/EmptyState.jsx
try { (() => {
function EmptyState({
  icon = 'inbox-line',
  title,
  children,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "empty"
  }, /*#__PURE__*/React.createElement("div", {
    className: "empty__icon"
  }, /*#__PURE__*/React.createElement("i", {
    className: 'ri-' + icon
  })), /*#__PURE__*/React.createElement("div", {
    className: "empty__title"
  }, title), /*#__PURE__*/React.createElement("p", null, children), action || null);
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/EmptyState/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/Field/Field.jsx
try { (() => {
function Field({
  label,
  hint,
  error,
  children
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: "field"
  }, label ? /*#__PURE__*/React.createElement("span", {
    className: "field__label"
  }, label) : null, children, error ? /*#__PURE__*/React.createElement("span", {
    className: "field__error"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ri-error-warning-fill"
  }), error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Field/Field.jsx", error: String((e && e.message) || e) }); }

// components/IconBtn/IconBtn.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconBtn({
  icon,
  variant = 'ghost',
  size = 'md',
  ...rest
}) {
  const cls = ['btn', 'btn--' + variant, 'btn--icon-only'];
  if (size === 'sm') cls.push('btn--sm');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls.join(' ')
  }, rest), /*#__PURE__*/React.createElement("i", {
    className: 'ri-' + icon
  }));
}
Object.assign(__ds_scope, { IconBtn });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/IconBtn/IconBtn.jsx", error: String((e && e.message) || e) }); }

// components/Input/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  icon,
  error,
  ...rest
}) {
  if (icon) {
    return /*#__PURE__*/React.createElement("div", {
      className: "input-group"
    }, /*#__PURE__*/React.createElement("span", {
      className: "input-group__icon"
    }, /*#__PURE__*/React.createElement("i", {
      className: 'ri-' + icon
    })), /*#__PURE__*/React.createElement("input", _extends({
      className: 'input' + (error ? ' input--error' : '')
    }, rest)));
  }
  return /*#__PURE__*/React.createElement("input", _extends({
    className: 'input' + (error ? ' input--error' : '')
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Input/Input.jsx", error: String((e && e.message) || e) }); }

// components/Tag/Tag.jsx
try { (() => {
function Tag({
  brand = false,
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: 'tag' + (brand ? ' tag--brand' : '')
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Tag/Tag.jsx", error: String((e && e.message) || e) }); }

// components/Textarea/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea(props) {
  return /*#__PURE__*/React.createElement("textarea", _extends({
    className: "input textarea"
  }, props));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Textarea/Textarea.jsx", error: String((e && e.message) || e) }); }

// ui_kits/clms-web/AddQuestionScreen.jsx
try { (() => {
/* CLMS UI kit — Add Question (MCQ) authoring screen. */

const AddQuestionScreen = ({
  onCancel,
  onSave
}) => {
  const [stem, setStem] = React.useState('Which of the following are prime numbers between 10 and 30?');
  const [options, setOptions] = React.useState([{
    text: '11',
    correct: false
  }, {
    text: '17',
    correct: true
  }, {
    text: '21',
    correct: false
  }, {
    text: '23',
    correct: true
  }]);
  const [marks, setMarks] = React.useState(4);
  const [marksError, setMarksError] = React.useState('');
  const [subject, setSubject] = React.useState('Mathematics');
  const [klass, setKlass] = React.useState('Class 7');
  const setOpt = (i, patch) => setOptions(arr => arr.map((o, idx) => idx === i ? {
    ...o,
    ...patch
  } : o));
  const addOpt = () => setOptions(arr => [...arr, {
    text: '',
    correct: false
  }]);
  const removeOpt = i => setOptions(arr => arr.filter((_, idx) => idx !== i));
  const validateMarks = v => {
    const n = Number(v);
    if (isNaN(n) || n <= 0) {
      setMarksError('Marks must be a positive number');
    } else setMarksError('');
    setMarks(v);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "page-header"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "tertiary",
    leadingIcon: "arrow-left-line",
    onClick: onCancel
  }, "Back to Library"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 8
    }
  }, "Add Question"), /*#__PURE__*/React.createElement("p", null, "Multiple choice (multi-select) \xB7 Auto-saved as draft every 30 seconds.")), /*#__PURE__*/React.createElement("div", {
    className: "hstack"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: onCancel
  }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    leadingIcon: "save-3-line",
    onClick: () => onSave('draft')
  }, "Save Draft"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    leadingIcon: "send-plane-line",
    onClick: () => onSave('review')
  }, "Request Review"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 320px',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "vstack",
    style: {
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--grey-500)',
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      marginBottom: 12
    }
  }, "Question type"), /*#__PURE__*/React.createElement("div", {
    className: "pill-row",
    style: {
      marginBottom: 0
    }
  }, ['MCQ', 'Fill in the blanks', 'Match the following', 'One-word', 'Subjective', 'Sequencing'].map((t, i) => /*#__PURE__*/React.createElement("button", {
    key: t,
    className: `pill ${i === 0 ? 'is-active' : ''}`
  }, t)))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--grey-500)',
      textTransform: 'uppercase',
      letterSpacing: '0.04em'
    }
  }, "Question stem"), /*#__PURE__*/React.createElement(Button, {
    variant: "tertiary",
    size: "sm",
    leadingIcon: "sparkling-2-line"
  }, "Suggest with AI")), /*#__PURE__*/React.createElement(Textarea, {
    value: stem,
    onChange: e => setStem(e.target.value),
    placeholder: "Type the question students will see\u2026",
    style: {
      minHeight: 92
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    leadingIcon: "image-add-line"
  }, "Add image"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    leadingIcon: "mic-line"
  }, "Add audio"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    leadingIcon: "video-add-line"
  }, "Add video"))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--grey-500)',
      textTransform: 'uppercase',
      letterSpacing: '0.04em'
    }
  }, "Options \xB7 tick all correct answers"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--grey-450)'
    }
  }, options.filter(o => o.correct).length, " marked correct")), /*#__PURE__*/React.createElement("div", {
    className: "vstack",
    style: {
      gap: 10
    }
  }, options.map((opt, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: `option-row ${opt.correct ? 'is-correct' : ''}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "option-row__letter"
  }, String.fromCharCode(65 + i)), /*#__PURE__*/React.createElement("input", {
    value: opt.text,
    onChange: e => setOpt(i, {
      text: e.target.value
    }),
    placeholder: "Option text"
  }), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      gap: 6,
      alignItems: 'center',
      fontSize: 13,
      color: 'var(--grey-500)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: opt.correct,
    onChange: e => setOpt(i, {
      correct: e.target.checked
    })
  }), "Correct"), /*#__PURE__*/React.createElement(IconBtn, {
    icon: "delete-bin-line",
    variant: "ghost",
    size: "sm",
    onClick: () => removeOpt(i),
    disabled: options.length <= 2
  }))), /*#__PURE__*/React.createElement(Button, {
    variant: "tertiary",
    leadingIcon: "add-line",
    onClick: addOpt,
    style: {
      alignSelf: 'flex-start'
    }
  }, "Add option"))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--grey-500)',
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      marginBottom: 8
    }
  }, "Solution explanation"), /*#__PURE__*/React.createElement(Textarea, {
    placeholder: "Explain why the correct answer is correct. Shown to students after they answer.",
    style: {
      minHeight: 80
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "vstack",
    style: {
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--grey-500)',
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      marginBottom: 12
    }
  }, "Classification"), /*#__PURE__*/React.createElement("div", {
    className: "vstack",
    style: {
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Subject"
  }, /*#__PURE__*/React.createElement("select", {
    className: "input",
    value: subject,
    onChange: e => setSubject(e.target.value)
  }, SUBJECTS.map(s => /*#__PURE__*/React.createElement("option", {
    key: s
  }, s)))), /*#__PURE__*/React.createElement(Field, {
    label: "Class"
  }, /*#__PURE__*/React.createElement("select", {
    className: "input",
    value: klass,
    onChange: e => setKlass(e.target.value)
  }, CLASSES.map(c => /*#__PURE__*/React.createElement("option", {
    key: c
  }, c)))), /*#__PURE__*/React.createElement(Field, {
    label: "Topic"
  }, /*#__PURE__*/React.createElement(Input, {
    defaultValue: "Number Systems",
    placeholder: "e.g. Linear Equations"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Difficulty"
  }, /*#__PURE__*/React.createElement("select", {
    className: "input",
    defaultValue: "Medium"
  }, /*#__PURE__*/React.createElement("option", null, "Easy"), /*#__PURE__*/React.createElement("option", null, "Medium"), /*#__PURE__*/React.createElement("option", null, "Hard"))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--grey-500)',
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      marginBottom: 12
    }
  }, "Scoring"), /*#__PURE__*/React.createElement("div", {
    className: "vstack",
    style: {
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Marks",
    error: marksError,
    hint: !marksError && 'Awarded when fully correct.'
  }, /*#__PURE__*/React.createElement(Input, {
    type: "number",
    value: marks,
    onChange: e => validateMarks(e.target.value),
    error: !!marksError
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Negative marking",
    hint: "Deducted for an incorrect attempt."
  }, /*#__PURE__*/React.createElement(Input, {
    type: "number",
    defaultValue: 0
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Time limit (seconds)",
    hint: "Leave blank for no limit."
  }, /*#__PURE__*/React.createElement(Input, {
    type: "number",
    defaultValue: 90
  })))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--grey-500)',
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      marginBottom: 12
    }
  }, "Workflow"), /*#__PURE__*/React.createElement("div", {
    className: "vstack",
    style: {
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Reviewer"
  }, /*#__PURE__*/React.createElement("select", {
    className: "input"
  }, /*#__PURE__*/React.createElement("option", null, "Rohit Menon (Senior Reviewer)"), /*#__PURE__*/React.createElement("option", null, "Priya Kaur"))), /*#__PURE__*/React.createElement(Field, {
    label: "Tags"
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Add tags\u2026"
  })))))));
};
Object.assign(window, {
  AddQuestionScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/clms-web/AddQuestionScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/clms-web/App.jsx
try { (() => {
/* CLMS UI kit — App root: screen routing + state. */

const SCREEN_TRAIL = {
  library: ['Home', 'Question Library'],
  view: ['Home', 'Question Library', 'View Question'],
  add: ['Home', 'Question Library', 'Add Question'],
  bulk: ['Home', 'Question Library', 'Bulk Upload']
};
const App = () => {
  const [authed, setAuthed] = React.useState(false);
  const [screen, setScreen] = React.useState('library'); // library | view | add | bulk
  const [activeQuestionId, setActiveQuestionId] = React.useState(null);
  const [questions, setQuestions] = React.useState(QUESTIONS_SEED);
  const [archiveModal, setArchiveModal] = React.useState(false);
  const toast = useToast();
  const activeQuestion = questions.find(q => q.id === activeQuestionId);
  if (!authed) {
    return /*#__PURE__*/React.createElement(LoginScreen, {
      onLogin: () => {
        setAuthed(true);
        toast({
          kind: 'success',
          message: 'Signed in. Welcome back, Aanya.'
        });
      }
    });
  }
  const goto = key => {
    setScreen(key);
  };
  const goLibrary = () => setScreen('library');
  const updateQ = (id, patch) => setQuestions(arr => arr.map(q => q.id === id ? {
    ...q,
    ...patch
  } : q));
  return /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, /*#__PURE__*/React.createElement(Sidebar, {
    active: "library",
    onNavigate: () => goto('library')
  }), /*#__PURE__*/React.createElement("div", {
    className: "shell__main"
  }, /*#__PURE__*/React.createElement(TopBar, {
    trail: SCREEN_TRAIL[screen]
  }), /*#__PURE__*/React.createElement("div", {
    className: "shell__content"
  }, screen === 'library' && /*#__PURE__*/React.createElement(QuestionLibraryScreen, {
    questions: questions,
    onOpen: id => {
      setActiveQuestionId(id);
      setScreen('view');
    },
    onAdd: () => setScreen('add'),
    onBulkUpload: () => setScreen('bulk')
  }), screen === 'view' && activeQuestion && /*#__PURE__*/React.createElement(ViewQuestionScreen, {
    question: activeQuestion,
    onBack: goLibrary,
    onEdit: () => setScreen('add'),
    onPublish: () => {
      updateQ(activeQuestion.id, {
        status: 'published'
      });
      toast({
        kind: 'success',
        message: `${activeQuestion.id} published successfully.`
      });
    },
    onArchive: () => setArchiveModal(true)
  }), screen === 'add' && /*#__PURE__*/React.createElement(AddQuestionScreen, {
    onCancel: goLibrary,
    onSave: mode => {
      toast({
        kind: 'success',
        message: mode === 'draft' ? 'Question saved as draft.' : 'Sent for review.'
      });
      goLibrary();
    }
  }), screen === 'bulk' && /*#__PURE__*/React.createElement(BulkUploadScreen, {
    onCancel: goLibrary,
    onComplete: n => {
      toast({
        kind: 'success',
        message: `Imported ${n} questions to the library.`
      });
      goLibrary();
    }
  }))), /*#__PURE__*/React.createElement(Modal, {
    open: archiveModal,
    title: "Archive this question?",
    onClose: () => setArchiveModal(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setArchiveModal(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      variant: "danger",
      leadingIcon: "archive-line",
      onClick: () => {
        updateQ(activeQuestionId, {
          status: 'archived'
        });
        setArchiveModal(false);
        toast({
          kind: 'success',
          message: `${activeQuestionId} archived. You can restore it from the Archived tab.`
        });
      }
    }, "Archive"))
  }, "Archived questions are removed from active test papers but stay searchable. You can restore them at any time from the ", /*#__PURE__*/React.createElement("b", null, "Archived"), " tab."));
};
const Root = () => /*#__PURE__*/React.createElement(ToastProvider, null, /*#__PURE__*/React.createElement(App, null));
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(Root, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/clms-web/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/clms-web/BulkUploadScreen.jsx
try { (() => {
/* CLMS UI kit — Bulk Upload screen with file-drop + validation results. */

const BulkUploadScreen = ({
  onCancel,
  onComplete
}) => {
  const [step, setStep] = React.useState('upload'); // upload | uploading | results
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    if (step !== 'uploading') return;
    const t = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(t);
          setStep('results');
          return 100;
        }
        return Math.min(100, p + 12);
      });
    }, 220);
    return () => clearInterval(t);
  }, [step]);
  const fileRows = [{
    id: 1,
    row: 1,
    type: 'MCQ',
    ok: true,
    msg: 'Imported'
  }, {
    id: 2,
    row: 2,
    type: 'MCQ',
    ok: true,
    msg: 'Imported'
  }, {
    id: 3,
    row: 3,
    type: 'Fill-blanks',
    ok: false,
    msg: 'Missing answer in column F'
  }, {
    id: 4,
    row: 4,
    type: 'One-word',
    ok: true,
    msg: 'Imported'
  }, {
    id: 5,
    row: 5,
    type: 'Match',
    ok: false,
    msg: 'Pair count mismatch (4 vs 5)'
  }, {
    id: 6,
    row: 6,
    type: 'MCQ',
    ok: true,
    msg: 'Imported'
  }, {
    id: 7,
    row: 7,
    type: 'Subjective',
    ok: true,
    msg: 'Imported · marked low-confidence'
  }, {
    id: 8,
    row: 8,
    type: 'MCQ',
    ok: false,
    msg: 'Unknown subject "Maths"'
  }];
  const okCount = fileRows.filter(r => r.ok).length;
  const errCount = fileRows.length - okCount;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "page-header"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "tertiary",
    leadingIcon: "arrow-left-line",
    onClick: onCancel
  }, "Back to Library"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 8
    }
  }, "Bulk Upload Questions"), /*#__PURE__*/React.createElement("p", null, "Upload up to 500 questions at once using the CSV template.")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    leadingIcon: "download-2-line"
  }, "Download template")), /*#__PURE__*/React.createElement(Card, {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      alignItems: 'center'
    }
  }, [['Upload file', step !== 'upload' ? 'done' : 'active'], ['Validate', step === 'uploading' ? 'active' : step === 'results' ? 'done' : 'pending'], ['Review & import', step === 'results' ? 'active' : 'pending']].map(([label, state], i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: label
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 9999,
      fontWeight: 700,
      fontSize: 13,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: state === 'done' ? 'var(--support-success)' : state === 'active' ? 'var(--primary-300)' : 'var(--grey-100)',
      color: state === 'pending' ? 'var(--grey-500)' : '#fff'
    }
  }, state === 'done' ? /*#__PURE__*/React.createElement("i", {
    className: "ri-check-line"
  }) : i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: state === 'pending' ? 'var(--grey-500)' : 'var(--grey-900)'
    }
  }, label)), i < 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 2,
      background: state === 'done' ? 'var(--support-success)' : 'var(--border-subtle)'
    }
  }))))), step === 'upload' && /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      border: '2px dashed var(--border-default)',
      borderRadius: 12,
      padding: 48,
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      alignItems: 'center',
      background: 'var(--bg-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: 9999,
      background: 'var(--primary-100)',
      color: 'var(--primary-500)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 28
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ri-upload-cloud-2-line"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      color: 'var(--grey-900)'
    }
  }, "Drop your CSV file here"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--grey-500)',
      fontSize: 14,
      maxWidth: 400
    }
  }, "Maximum 500 rows per upload \xB7 5 MB max. Only the template format is accepted."), /*#__PURE__*/React.createElement("div", {
    className: "hstack",
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    leadingIcon: "folder-upload-line",
    onClick: () => setStep('uploading')
  }, "Browse files"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    leadingIcon: "download-2-line"
  }, "Download template"))), /*#__PURE__*/React.createElement("div", {
    className: "divider"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: 13,
      color: 'var(--grey-500)'
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    className: "ri-information-line",
    style: {
      marginRight: 6
    }
  }), "Need help? See ", /*#__PURE__*/React.createElement("a", null, "Bulk upload guide"), "."), /*#__PURE__*/React.createElement("span", null, "Recent uploads: ", /*#__PURE__*/React.createElement("a", null, "2 Apr \xB7 412 questions")))), step === 'uploading' && /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 8,
      background: 'var(--primary-100)',
      color: 'var(--primary-500)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 20
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ri-file-text-line"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--grey-900)'
    }
  }, "questions_apr_batch_03.csv"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--grey-450)',
      marginTop: 2
    }
  }, progress < 100 ? `Validating row ${Math.min(8, Math.ceil(progress / 12))} of 8…` : 'Validation complete'), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      background: 'var(--grey-100)',
      borderRadius: 9999,
      marginTop: 10,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: `${progress}%`,
      background: 'var(--primary-300)',
      transition: 'width 200ms ease-out'
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--grey-500)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, progress, "%"))), step === 'results' && /*#__PURE__*/React.createElement("div", {
    className: "vstack",
    style: {
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      background: '#FFF4E0',
      borderLeft: '3px solid #EFA12B',
      borderRadius: 6,
      padding: '14px 18px'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ri-error-warning-fill",
    style: {
      color: '#B67414',
      fontSize: 22
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      color: '#5A3A0F'
    }
  }, errCount, " of ", fileRows.length, " rows need attention"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: '#7A5217',
      marginTop: 2
    }
  }, "You can still import the ", okCount, " valid rows now and re-upload the corrected ones later.")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    leadingIcon: "download-2-line",
    size: "sm"
  }, "Download error report")), /*#__PURE__*/React.createElement(Card, {
    padded: false
  }, /*#__PURE__*/React.createElement("table", {
    className: "table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      width: 60
    }
  }, "Row"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 120
    }
  }, "Type"), /*#__PURE__*/React.createElement("th", null, "Result"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 120
    }
  }, "Status"))), /*#__PURE__*/React.createElement("tbody", null, fileRows.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r.id,
    style: {
      cursor: 'default'
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12
    }
  }, r.row), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Tag, null, r.type)), /*#__PURE__*/React.createElement("td", {
    style: {
      color: r.ok ? 'var(--grey-700)' : '#9A1818'
    }
  }, r.ok ? /*#__PURE__*/React.createElement("i", {
    className: "ri-check-line",
    style: {
      color: 'var(--support-success)',
      marginRight: 6
    }
  }) : /*#__PURE__*/React.createElement("i", {
    className: "ri-close-circle-fill",
    style: {
      color: 'var(--support-error)',
      marginRight: 6
    }
  }), r.msg), /*#__PURE__*/React.createElement("td", null, r.ok ? /*#__PURE__*/React.createElement(Chip, {
    status: "approved"
  }, "Valid") : /*#__PURE__*/React.createElement(Chip, {
    status: "archived",
    style: {
      background: '#FCE2E2',
      color: '#9A1818'
    }
  }, "Error"))))))), /*#__PURE__*/React.createElement("div", {
    className: "hstack",
    style: {
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: onCancel
  }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    leadingIcon: "refresh-line",
    onClick: () => {
      setStep('upload');
      setProgress(0);
    }
  }, "Upload another file"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    leadingIcon: "check-line",
    onClick: () => onComplete(okCount)
  }, "Import ", okCount, " valid rows"))));
};
Object.assign(window, {
  BulkUploadScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/clms-web/BulkUploadScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/clms-web/LoginScreen.jsx
try { (() => {
/* CLMS UI kit — Login screen. Mirrors /Phase-1-Dev-Ready/Login. */

const LoginScreen = ({
  onLogin
}) => {
  const [email, setEmail] = React.useState('aanya.sharma@convegenius.com');
  const [password, setPassword] = React.useState('');
  const [showPwd, setShowPwd] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: '#f3f4f7',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1280,
      maxWidth: '100%',
      minHeight: 720,
      background: '#fff',
      borderRadius: 12,
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--primary-300)',
      position: 'relative',
      padding: 56,
      color: '#fff',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'url(./assets/login-bg.jpg) center / cover no-repeat',
      opacity: 0.08
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "./assets/logo.png",
    alt: "ConveGenius",
    style: {
      height: 40,
      filter: 'brightness(0) invert(1)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 40,
      fontWeight: 700,
      lineHeight: 1.1
    }
  }, "Welcome to"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32,
      fontWeight: 700,
      marginTop: 12,
      lineHeight: 1.2
    }
  }, "Content & Learning", /*#__PURE__*/React.createElement("br", null), "Management System"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      marginTop: 24,
      opacity: 0.85,
      maxWidth: 420,
      lineHeight: 1.6
    }
  }, "Author, review, translate and publish learning content across grades, subjects and languages \u2014 in one place."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      marginTop: 36,
      opacity: 0.85,
      fontSize: 13
    }
  }, ['Faster authoring', 'Approval workflows', 'Multi-language'].map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ri-checkbox-circle-fill",
    style: {
      color: '#8ED4CF'
    }
  }), s)))))), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onLogin && onLogin(email);
    },
    style: {
      padding: '72px 80px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: '700 30px/36px var(--font-base)',
      color: 'var(--grey-900)'
    }
  }, "Login"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      color: 'var(--grey-450)',
      fontSize: 16
    }
  }, "Please enter your details.")), /*#__PURE__*/React.createElement(Field, {
    label: "Email address"
  }, /*#__PURE__*/React.createElement("input", {
    className: "input",
    type: "email",
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: "you@convegenius.com"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Password"
  }, /*#__PURE__*/React.createElement("div", {
    className: "input-group",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "input",
    style: {
      paddingLeft: 14,
      paddingRight: 44
    },
    type: showPwd ? 'text' : 'password',
    value: password,
    onChange: e => setPassword(e.target.value),
    placeholder: "Enter your password"
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setShowPwd(v => !v),
    style: {
      position: 'absolute',
      right: 10,
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'transparent',
      border: 0,
      cursor: 'pointer',
      color: 'var(--grey-500)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: `ri-${showPwd ? 'eye-off-line' : 'eye-line'}`,
    style: {
      fontSize: 18
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: -8
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      gap: 8,
      alignItems: 'center',
      fontSize: 13,
      color: 'var(--grey-500)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    defaultChecked: true
  }), "Keep me signed in"), /*#__PURE__*/React.createElement("a", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--text-link)',
      cursor: 'pointer'
    }
  }, "Forgot Password?")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    type: "submit",
    style: {
      width: '100%',
      marginTop: 8
    }
  }, "Login"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--grey-450)',
      textAlign: 'center'
    }
  }, "New here? Contact your administrator for an invite."))));
};
Object.assign(window, {
  LoginScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/clms-web/LoginScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/clms-web/Primitives.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* CLMS UI kit — primitives.
   Exports: Button, IconBtn, Input, Textarea, Field, Chip, Tag,
            Card, EmptyState, Toast stack helpers.
   Loaded as Babel JSX. */

const Button = ({
  variant = 'primary',
  size = 'md',
  leadingIcon,
  trailingIcon,
  children,
  ...rest
}) => {
  const cls = ['btn', `btn--${variant}`];
  if (size === 'sm') cls.push('btn--sm');
  if (size === 'lg') cls.push('btn--lg');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls.join(' ')
  }, rest), leadingIcon && /*#__PURE__*/React.createElement("i", {
    className: `ri-${leadingIcon}`
  }), /*#__PURE__*/React.createElement("span", null, children), trailingIcon && /*#__PURE__*/React.createElement("i", {
    className: `ri-${trailingIcon}`
  }));
};
const IconBtn = ({
  icon,
  variant = 'ghost',
  size = 'md',
  ...rest
}) => {
  const cls = ['btn', `btn--${variant}`, 'btn--icon-only'];
  if (size === 'sm') cls.push('btn--sm');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls.join(' ')
  }, rest), /*#__PURE__*/React.createElement("i", {
    className: `ri-${icon}`
  }));
};
const Field = ({
  label,
  hint,
  error,
  children
}) => /*#__PURE__*/React.createElement("label", {
  className: "field"
}, label && /*#__PURE__*/React.createElement("span", {
  className: "field__label"
}, label), children, error ? /*#__PURE__*/React.createElement("span", {
  className: "field__error"
}, /*#__PURE__*/React.createElement("i", {
  className: "ri-error-warning-fill"
}), error) : hint && /*#__PURE__*/React.createElement("span", {
  className: "field__hint"
}, hint));
const Input = ({
  icon,
  error,
  ...rest
}) => {
  if (icon) {
    return /*#__PURE__*/React.createElement("div", {
      className: "input-group"
    }, /*#__PURE__*/React.createElement("span", {
      className: "input-group__icon"
    }, /*#__PURE__*/React.createElement("i", {
      className: `ri-${icon}`
    })), /*#__PURE__*/React.createElement("input", _extends({
      className: `input${error ? ' input--error' : ''}`
    }, rest)));
  }
  return /*#__PURE__*/React.createElement("input", _extends({
    className: `input${error ? ' input--error' : ''}`
  }, rest));
};
const Textarea = props => /*#__PURE__*/React.createElement("textarea", _extends({
  className: "input textarea"
}, props));
const Chip = ({
  status,
  children
}) => /*#__PURE__*/React.createElement("span", {
  className: `chip chip--${status}`
}, children);
const Tag = ({
  brand,
  children
}) => /*#__PURE__*/React.createElement("span", {
  className: `tag ${brand ? 'tag--brand' : ''}`
}, children);
const Card = ({
  padded = true,
  className = '',
  children,
  ...rest
}) => /*#__PURE__*/React.createElement("div", _extends({
  className: `card ${padded ? 'card__padded' : ''} ${className}`
}, rest), children);
const EmptyState = ({
  icon = 'inbox-line',
  title,
  children,
  action
}) => /*#__PURE__*/React.createElement("div", {
  className: "empty"
}, /*#__PURE__*/React.createElement("div", {
  className: "empty__icon"
}, /*#__PURE__*/React.createElement("i", {
  className: `ri-${icon}`
})), /*#__PURE__*/React.createElement("div", {
  className: "empty__title"
}, title), /*#__PURE__*/React.createElement("p", null, children), action);

/* Toast stack — global */
const ToastContext = React.createContext(null);
const ToastProvider = ({
  children
}) => {
  const [items, setItems] = React.useState([]);
  const push = React.useCallback(toast => {
    const id = Math.random().toString(36).slice(2);
    setItems(arr => [...arr, {
      id,
      ...toast
    }]);
    setTimeout(() => setItems(arr => arr.filter(t => t.id !== id)), toast.duration || 3400);
  }, []);
  return /*#__PURE__*/React.createElement(ToastContext.Provider, {
    value: push
  }, children, /*#__PURE__*/React.createElement("div", {
    className: "toast-stack"
  }, items.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.id,
    className: `toast toast--${t.kind || 'info'}`
  }, /*#__PURE__*/React.createElement("i", {
    className: `ri-${t.icon || (t.kind === 'success' ? 'checkbox-circle-fill' : t.kind === 'error' ? 'error-warning-fill' : 'information-fill')}`
  }), /*#__PURE__*/React.createElement("span", null, t.message), /*#__PURE__*/React.createElement("button", {
    onClick: () => setItems(arr => arr.filter(x => x.id !== t.id))
  }, /*#__PURE__*/React.createElement("i", {
    className: "ri-close-line"
  }))))));
};
const useToast = () => React.useContext(ToastContext);

/* Modal */
const Modal = ({
  open,
  title,
  children,
  onClose,
  footer
}) => {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-scrim",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal__header"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "modal__title"
  }, title)), /*#__PURE__*/React.createElement("div", {
    className: "modal__body"
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "modal__footer"
  }, footer)));
};
Object.assign(window, {
  Button,
  IconBtn,
  Field,
  Input,
  Textarea,
  Chip,
  Tag,
  Card,
  EmptyState,
  Modal,
  ToastProvider,
  useToast
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/clms-web/Primitives.jsx", error: String((e && e.message) || e) }); }

// ui_kits/clms-web/QuestionLibraryScreen.jsx
try { (() => {
/* CLMS UI kit — Question Library screen. */

const QuestionLibraryScreen = ({
  questions,
  onOpen,
  onAdd,
  onBulkUpload
}) => {
  const [tab, setTab] = React.useState('all');
  const [subject, setSubject] = React.useState('all');
  const [query, setQuery] = React.useState('');
  const counts = React.useMemo(() => {
    const c = {
      all: questions.length,
      draft: 0,
      review: 0,
      approved: 0,
      published: 0,
      archived: 0
    };
    questions.forEach(q => {
      c[q.status] = (c[q.status] || 0) + 1;
    });
    return c;
  }, [questions]);
  const filtered = questions.filter(q => {
    if (tab !== 'all' && q.status !== tab) return false;
    if (subject !== 'all' && q.subject !== subject) return false;
    if (query && !(q.stem.toLowerCase().includes(query.toLowerCase()) || q.id.toLowerCase().includes(query.toLowerCase()))) return false;
    return true;
  });
  const tabs = [['all', 'All'], ['draft', 'Drafts'], ['review', 'In Review'], ['approved', 'Approved'], ['published', 'Published'], ['archived', 'Archived']];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "page-header"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Question Library"), /*#__PURE__*/React.createElement("p", null, "Author, review and publish questions across grades, subjects and languages.")), /*#__PURE__*/React.createElement("div", {
    className: "hstack"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    leadingIcon: "upload-2-line",
    onClick: onBulkUpload
  }, "Bulk Upload"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    leadingIcon: "add-line",
    onClick: onAdd
  }, "Add Question"))), /*#__PURE__*/React.createElement("div", {
    className: "tabs"
  }, tabs.map(([k, label]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: `tab ${tab === k ? 'is-active' : ''}`,
    onClick: () => setTab(k)
  }, label, /*#__PURE__*/React.createElement("span", {
    className: "tab__count"
  }, counts[k] || 0)))), /*#__PURE__*/React.createElement("div", {
    className: "filter-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/React.createElement("span", {
    className: "input-group__icon"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ri-search-line"
  })), /*#__PURE__*/React.createElement("input", {
    className: "input",
    placeholder: "Search by question text or ID",
    value: query,
    onChange: e => setQuery(e.target.value)
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    leadingIcon: "filter-3-line"
  }, "Filters"), /*#__PURE__*/React.createElement("div", {
    className: "spacer"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    leadingIcon: "download-2-line",
    size: "sm"
  }, "Export")), /*#__PURE__*/React.createElement("div", {
    className: "pill-row"
  }, /*#__PURE__*/React.createElement("button", {
    className: `pill ${subject === 'all' ? 'is-active' : ''}`,
    onClick: () => setSubject('all')
  }, "All Subjects"), SUBJECTS.map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    className: `pill ${subject === s ? 'is-active' : ''}`,
    onClick: () => setSubject(s)
  }, s))), filtered.length === 0 ? /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(EmptyState, {
    icon: "inbox-line",
    title: "No questions match these filters",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      leadingIcon: "refresh-line",
      onClick: () => {
        setTab('all');
        setSubject('all');
        setQuery('');
      }
    }, "Reset filters")
  }, "Try widening your filters or clearing the search to see more results.")) : /*#__PURE__*/React.createElement(Card, {
    padded: false
  }, /*#__PURE__*/React.createElement("table", {
    className: "table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      width: 80
    }
  }, "ID"), /*#__PURE__*/React.createElement("th", null, "Question"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 120
    }
  }, "Type"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 140
    }
  }, "Subject"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 90
    }
  }, "Class"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 70
    }
  }, "Marks"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 120
    }
  }, "Status"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 140
    }
  }, "Updated"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 40
    }
  }))), /*#__PURE__*/React.createElement("tbody", null, filtered.map(q => /*#__PURE__*/React.createElement("tr", {
    key: q.id,
    onClick: () => onOpen(q.id)
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--grey-500)'
    }
  }, q.id), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 500,
      color: 'var(--grey-900)'
    }
  }, q.stem), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--grey-450)',
      marginTop: 2
    }
  }, q.topic, " \xB7 by ", q.author)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Tag, null, q.type)), /*#__PURE__*/React.createElement("td", {
    style: {
      color: 'var(--grey-500)'
    }
  }, q.subject), /*#__PURE__*/React.createElement("td", {
    style: {
      color: 'var(--grey-500)'
    }
  }, q.klass), /*#__PURE__*/React.createElement("td", null, q.marks), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Chip, {
    status: q.status
  }, STATUS_LABEL[q.status])), /*#__PURE__*/React.createElement("td", {
    style: {
      color: 'var(--grey-500)',
      fontSize: 13
    }
  }, q.updated), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(IconBtn, {
    icon: "more-2-fill",
    variant: "ghost",
    size: "sm",
    onClick: e => {
      e.stopPropagation();
    }
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 16,
      fontSize: 13,
      color: 'var(--grey-500)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Showing ", filtered.length, " of ", questions.length, " questions"), /*#__PURE__*/React.createElement("div", {
    className: "hstack"
  }, /*#__PURE__*/React.createElement(IconBtn, {
    icon: "arrow-left-s-line",
    variant: "ghost",
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '0 8px'
    }
  }, "Page 1 of 1"), /*#__PURE__*/React.createElement(IconBtn, {
    icon: "arrow-right-s-line",
    variant: "ghost",
    size: "sm"
  }))));
};
Object.assign(window, {
  QuestionLibraryScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/clms-web/QuestionLibraryScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/clms-web/Shell.jsx
try { (() => {
/* CLMS UI kit — shell: Sidebar, TopBar, Breadcrumbs. */

const NAV_ITEMS = [{
  key: 'library',
  label: 'Question Library',
  icon: 'book-2-line'
}, {
  key: 'papers',
  label: 'Test Papers',
  icon: 'file-list-3-line'
}, {
  key: 'bulk',
  label: 'Bulk Upload',
  icon: 'upload-cloud-2-line'
}, {
  key: 'translate',
  label: 'Translations',
  icon: 'translate-2'
}];
const NAV_ADMIN = [{
  key: 'users',
  label: 'User Management',
  icon: 'team-line'
}, {
  key: 'master',
  label: 'Master Data',
  icon: 'database-2-line'
}, {
  key: 'credits',
  label: 'Credit System',
  icon: 'coin-line'
}];
const Sidebar = ({
  active,
  onNavigate
}) => /*#__PURE__*/React.createElement("aside", {
  className: "sidebar"
}, /*#__PURE__*/React.createElement("div", {
  className: "sidebar__logo"
}, /*#__PURE__*/React.createElement("img", {
  src: "./assets/logo.png",
  alt: "ConveGenius"
})), /*#__PURE__*/React.createElement("nav", {
  className: "sidebar__nav"
}, NAV_ITEMS.map(item => /*#__PURE__*/React.createElement("a", {
  key: item.key,
  className: `sidebar__item ${active === item.key ? 'is-active' : ''}`,
  onClick: () => onNavigate(item.key)
}, /*#__PURE__*/React.createElement("i", {
  className: `ri-${item.icon}`
}), /*#__PURE__*/React.createElement("span", null, item.label))), /*#__PURE__*/React.createElement("div", {
  className: "sidebar__group-label"
}, "Admin"), NAV_ADMIN.map(item => /*#__PURE__*/React.createElement("a", {
  key: item.key,
  className: `sidebar__item ${active === item.key ? 'is-active' : ''}`,
  onClick: () => onNavigate(item.key)
}, /*#__PURE__*/React.createElement("i", {
  className: `ri-${item.icon}`
}), /*#__PURE__*/React.createElement("span", null, item.label)))), /*#__PURE__*/React.createElement("div", {
  className: "sidebar__user"
}, /*#__PURE__*/React.createElement("div", {
  className: "sidebar__avatar"
}, "AS"), /*#__PURE__*/React.createElement("div", {
  style: {
    flex: 1,
    minWidth: 0
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 13,
    fontWeight: 600,
    color: 'var(--grey-900)'
  }
}, "Aanya Sharma"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 12,
    color: 'var(--grey-450)',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
}, "Content Lead")), /*#__PURE__*/React.createElement("i", {
  className: "ri-arrow-right-up-line",
  style: {
    color: 'var(--grey-450)'
  }
})));
const Breadcrumbs = ({
  trail
}) => /*#__PURE__*/React.createElement("div", {
  className: "breadcrumbs"
}, trail.map((node, i) => /*#__PURE__*/React.createElement(React.Fragment, {
  key: i
}, i > 0 && /*#__PURE__*/React.createElement("span", {
  className: "breadcrumbs__sep"
}, "/"), i === trail.length - 1 ? /*#__PURE__*/React.createElement("span", {
  className: "breadcrumbs__current"
}, node) : /*#__PURE__*/React.createElement("a", {
  style: {
    color: 'inherit'
  }
}, node))));
const TopBar = ({
  trail
}) => /*#__PURE__*/React.createElement("div", {
  className: "topbar"
}, /*#__PURE__*/React.createElement(Breadcrumbs, {
  trail: trail
}), /*#__PURE__*/React.createElement("div", {
  className: "hstack"
}, /*#__PURE__*/React.createElement("button", {
  className: "btn btn--ghost btn--sm",
  style: {
    borderColor: 'transparent'
  }
}, /*#__PURE__*/React.createElement("i", {
  className: "ri-search-line"
}), " Search ", /*#__PURE__*/React.createElement("span", {
  className: "kbd"
}, "\u2318K")), /*#__PURE__*/React.createElement("button", {
  className: "btn btn--ghost btn--icon-only",
  title: "Notifications"
}, /*#__PURE__*/React.createElement("i", {
  className: "ri-notification-3-line"
})), /*#__PURE__*/React.createElement("button", {
  className: "btn btn--ghost btn--icon-only",
  title: "Help"
}, /*#__PURE__*/React.createElement("i", {
  className: "ri-question-line"
}))));
Object.assign(window, {
  Sidebar,
  TopBar,
  Breadcrumbs
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/clms-web/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/clms-web/ViewQuestionScreen.jsx
try { (() => {
/* CLMS UI kit — View Question detail screen. */

const ViewQuestionScreen = ({
  question,
  onBack,
  onEdit,
  onPublish,
  onArchive
}) => {
  if (!question) return null;
  const options = ['11', '17', '21', '23', '29'];
  const correct = [1, 3, 4]; // indices into options

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "page-header"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "tertiary",
    leadingIcon: "arrow-left-line",
    onClick: onBack
  }, "Back to Library"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 8
    }
  }, question.id, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--grey-450)',
      fontWeight: 400
    }
  }, "\xB7 ", question.type)), /*#__PURE__*/React.createElement("p", null, question.subject, " \xB7 ", question.klass, " \xB7 ", question.topic, " \xB7 ", question.marks, " marks")), /*#__PURE__*/React.createElement("div", {
    className: "hstack"
  }, /*#__PURE__*/React.createElement(Chip, {
    status: question.status
  }, STATUS_LABEL[question.status]), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    leadingIcon: "archive-line",
    onClick: onArchive
  }, "Archive"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    leadingIcon: "pencil-line",
    onClick: onEdit
  }, "Edit"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    leadingIcon: "check-line",
    onClick: onPublish,
    disabled: question.status === 'published'
  }, question.status === 'published' ? 'Published' : 'Publish'))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 320px',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "vstack",
    style: {
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--grey-500)',
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      marginBottom: 10
    }
  }, "Question stem"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 500,
      color: 'var(--grey-900)',
      lineHeight: 1.5
    }
  }, question.stem)), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--grey-500)',
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      marginBottom: 12
    }
  }, "Options \xB7 select all that apply"), /*#__PURE__*/React.createElement("div", {
    className: "vstack",
    style: {
      gap: 10
    }
  }, options.map((opt, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: `option-row ${correct.includes(i) ? 'is-correct' : ''}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "option-row__letter"
  }, String.fromCharCode(65 + i)), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      color: 'var(--grey-900)',
      fontSize: 15
    }
  }, opt), correct.includes(i) && /*#__PURE__*/React.createElement(Chip, {
    status: "approved"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ri-check-line"
  }), " Correct"))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--grey-500)',
      textTransform: 'uppercase',
      letterSpacing: '0.04em'
    }
  }, "Solution explanation"), /*#__PURE__*/React.createElement(Tag, {
    brand: true
  }, /*#__PURE__*/React.createElement("i", {
    className: "ri-sparkling-2-fill",
    style: {
      marginRight: 4
    }
  }), "AI assisted")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--grey-700)',
      lineHeight: 1.65
    }
  }, "A prime number has exactly two distinct positive divisors \u2014 1 and itself. Between 10 and 30, the primes are", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--grey-900)'
    }
  }, " 11, 13, 17, 19, 23 and 29"), ". From the given options, 17, 23 and 29 are prime."))), /*#__PURE__*/React.createElement("div", {
    className: "vstack",
    style: {
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--grey-500)',
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      marginBottom: 12
    }
  }, "Details"), /*#__PURE__*/React.createElement("div", {
    className: "vstack",
    style: {
      gap: 10
    }
  }, [['Subject', question.subject], ['Class', question.klass], ['Topic', question.topic], ['Type', question.type], ['Marks', question.marks], ['Difficulty', 'Medium'], ['Language', 'English']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--grey-500)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--grey-900)',
      fontWeight: 500
    }
  }, v))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--grey-500)',
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      marginBottom: 12
    }
  }, "Translations"), /*#__PURE__*/React.createElement("div", {
    className: "vstack",
    style: {
      gap: 8
    }
  }, [['Hindi', 'Approved'], ['Marathi', 'In Review'], ['Tamil', 'Not started']].map(([lang, st]) => /*#__PURE__*/React.createElement("div", {
    key: lang,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--grey-900)'
    }
  }, lang), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--grey-500)'
    }
  }, st))), /*#__PURE__*/React.createElement(Button, {
    variant: "tertiary",
    leadingIcon: "translate-2",
    style: {
      alignSelf: 'flex-start',
      marginTop: 4
    }
  }, "Request translation"))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--grey-500)',
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      marginBottom: 12
    }
  }, "Activity"), /*#__PURE__*/React.createElement("div", {
    className: "vstack",
    style: {
      gap: 14,
      fontSize: 13
    }
  }, [['ri-edit-line', 'Aanya S.', 'edited the question', 'Today, 11:42'], ['ri-eye-line', 'Rohit M.', 'opened for review', 'Today, 09:10'], ['ri-add-line', 'Aanya S.', 'created this question', 'Yesterday, 17:54']].map(([icon, who, action, when], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: icon,
    style: {
      color: 'var(--grey-450)',
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--grey-900)'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 600
    }
  }, who), " ", action), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--grey-450)',
      fontSize: 12,
      marginTop: 2
    }
  }, when)))))))));
};
Object.assign(window, {
  ViewQuestionScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/clms-web/ViewQuestionScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/clms-web/data.js
try { (() => {
/* CLMS UI kit — seed data for the click-thru prototype. */

const SUBJECTS = ['Mathematics', 'Science', 'English', 'Social Studies', 'Hindi'];
const CLASSES = ['Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'];
const QUESTIONS_SEED = [{
  id: 'Q-2451',
  stem: 'Which of the following are prime numbers between 10 and 30?',
  type: 'MCQ',
  subject: 'Mathematics',
  klass: 'Class 7',
  topic: 'Number Systems',
  marks: 4,
  status: 'review',
  updated: 'Today, 11:42',
  author: 'Aanya S.'
}, {
  id: 'Q-2450',
  stem: 'Define photosynthesis in your own words and label the diagram.',
  type: 'Subjective',
  subject: 'Science',
  klass: 'Class 8',
  topic: 'Plant Biology',
  marks: 6,
  status: 'approved',
  updated: 'Today, 10:15',
  author: 'Rohit M.'
}, {
  id: 'Q-2449',
  stem: 'Arrange the events of the Indian freedom movement in chronological order.',
  type: 'Sequencing',
  subject: 'Social Studies',
  klass: 'Class 9',
  topic: 'Modern History',
  marks: 5,
  status: 'draft',
  updated: 'Yesterday, 18:20',
  author: 'Priya K.'
}, {
  id: 'Q-2448',
  stem: 'Fill in the blanks: The capital of Karnataka is _____ and its official language is _____.',
  type: 'Fill-in-blanks',
  subject: 'Social Studies',
  klass: 'Class 6',
  topic: 'States of India',
  marks: 2,
  status: 'published',
  updated: 'Yesterday, 15:01',
  author: 'Aanya S.'
}, {
  id: 'Q-2447',
  stem: 'Match the following authors with their works.',
  type: 'Match',
  subject: 'English',
  klass: 'Class 10',
  topic: 'Literature',
  marks: 4,
  status: 'published',
  updated: '2 Apr, 09:30',
  author: 'Vikram J.'
}, {
  id: 'Q-2446',
  stem: 'What is the value of x in the equation 3x + 7 = 22?',
  type: 'One-word',
  subject: 'Mathematics',
  klass: 'Class 7',
  topic: 'Linear Equations',
  marks: 2,
  status: 'archived',
  updated: '1 Apr, 16:48',
  author: 'Rohit M.'
}, {
  id: 'Q-2445',
  stem: 'Identify the error in the following Hindi sentence and rewrite it correctly.',
  type: 'Error analysis',
  subject: 'Hindi',
  klass: 'Class 8',
  topic: 'Grammar',
  marks: 3,
  status: 'review',
  updated: '1 Apr, 14:10',
  author: 'Meera N.'
}, {
  id: 'Q-2444',
  stem: 'Rearrange these phrases to form a meaningful paragraph about water conservation.',
  type: 'Rearrange',
  subject: 'English',
  klass: 'Class 9',
  topic: 'Writing Skills',
  marks: 4,
  status: 'draft',
  updated: '31 Mar, 11:02',
  author: 'Aanya S.'
}];
const STATUS_LABEL = {
  draft: 'Draft',
  review: 'In Review',
  approved: 'Approved',
  published: 'Published',
  archived: 'Archived'
};
Object.assign(window, {
  SUBJECTS,
  CLASSES,
  QUESTIONS_SEED,
  STATUS_LABEL
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/clms-web/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.IconBtn = __ds_scope.IconBtn;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Textarea = __ds_scope.Textarea;

})();
